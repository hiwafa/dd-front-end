import React, { useRef, useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
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
import { request } from '../../api';
const qs = require('qs');

export default function (props) {

  const headerHeight = useHeaderHeight();
  return <ChatBox {...props} headerHeight={headerHeight} />;
}


export const ChatBox = ({ headerHeight, route: { params: { chatId, name } } }) => {

  

  const dispatch = useDispatch();
  const { access_token, id } = useSelector(getUser);
  const messages = useSelector(getMessages);
  const viewHeight = windowHeight - headerHeight;

  useEffect(() => {

    dispatch(fetchMessages({
      token: access_token, chatId,
      filters: {
        only_new: false,
        num_recent: 50
      }
    }));

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Bearer ${access_token}`
    };

    dispatch(fetchMessages({
      token: access_token, chatId,
      filters: {
        only_new: true
      }
    })).then(async ({ payload }) => {

      if (payload && payload.msgs) {

        let messageIds = payload.msgs.map(itm => itm.id);
        
        console.log("bababa", messageIds);

        request(`chat/message/delivered/`, {
          method: "POST", headers, data: qs.stringify({
            chat_id: chatId, message_ids: messageIds
          })
        }).then(_=> {}).catch(_=> {});

      }

    }).catch(_ => {

    });

    const interval = setInterval(async () => {

      dispatch(fetchMessages({
        token: access_token, chatId,
        filters: {
          only_new: true,
          num_recent: 10
        }
      })).then(async ({ payload }) => {
        
        if (payload && payload.msgs) {
          
          let messageIds = payload.msgs.map(itm => itm.id);

          console.log("hahahahaha", payload.msgs);

          request(`chat/message/delivered/`, {
            method: "POST", headers, data: qs.stringify({
              chat_id: chatId, message_ids: messageIds
            })
          }).then(_=> {}).catch(_=> {});

        }

      }).catch(_ => {

      });

    }, 2000);

    return () => {
      clearInterval(interval);
    }

  }, []);

  return (
    <View style={styles.background}>

      <FlatList
        inverted={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        style={{ height: viewHeight - headerHeight }}
        data={messages[chatId] ? messages[chatId] : []}
        renderItem={({ item }) => <ChatMessage userid={id} message={item} />}
      />

      <InputTextBox chatId={chatId} userid={id} token={access_token} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#f3f3f3'
  },
});
