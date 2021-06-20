import React from 'react';
import { Text, FlatList, View, StyleSheet, Image, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import chats from '../../../data/chats';
import ChatMessage from "../../../components/ChatMessage";
import InputTextBox from "../../../components/InputTextBox";

export default function(props) {
  const route = useRoute();

  return <ChatBox {...props} route={route} />;
}

export class ChatBox extends React.Component{
  render() {
    const route = this.props;

    return(
      <View style={styles.background}>
        <FlatList
          data={chats.messages}
          renderItem={({ item }) => <ChatMessage message={item}/>}
        />
        <InputTextBox/>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  background: {
    backgroundColor: '#f3f3f3',
    height: '100%'
  },
  userImage: {
    width: 50,
    height: 50,
    marginHorizontal: 15
  },
  foregroundContainer: {
    width: Dimensions.get('window').width,
    height: 140,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoutButton: {
    position: 'absolute',
    top: 60,
    right: 15
  }
});
