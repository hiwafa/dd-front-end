import React, { useRef, useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, Image, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import chats from '../../../data/chats';
import ChatMessage from "../../components/ChatMessage";
import InputTextBox from "../../components/InputTextBox";
import { useHeaderHeight } from '@react-navigation/stack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import { useSelector, useDispatch } from "react-redux";
import { fetchMessages } from '../../store/actions/ChatsSlice';
import { getUser } from '../../store/actions/UserSlice';
import { getMessages } from '../../store/actions/ChatsSlice';

export default function (props) {

  const headerHeight = useHeaderHeight();
  return <ChatBox {...props} headerHeight={headerHeight} />;
}


export const ChatBox = ({headerHeight, route: { params: {chatId, name} } }) => {

  const dispatch = useDispatch();
  const { access_token, id } = useSelector(getUser);
  const messages = useSelector(getMessages);
  
  const viewHeight = windowHeight - headerHeight;

  useEffect(()=> {

    const interval = setInterval(async ()=> {

      dispatch(fetchMessages({token: access_token, chatId}));

    }, 1000);

    return ()=> {
      clearInterval(interval);
    }

  }, []);

  return (
    <View style={[styles.background, { height: viewHeight }]}>

      <FlatList
        inverted={true}
        keyExtractor={(item) => `${item.id}`}
        style={{ height: viewHeight - headerHeight }}
        data={ messages[chatId] ? messages[chatId] : [] }
        renderItem={({ item }) => <ChatMessage userid={id} message={item} />}
      />

      <KeyboardAvoidingView
        behavior="position">
        <InputTextBox chatId={chatId} userid={id} token={access_token}/>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f3f3f3',
  },
});
