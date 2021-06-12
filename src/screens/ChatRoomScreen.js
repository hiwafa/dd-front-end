import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'
import chats from '../../data/chats';
import ChatMessage from "../../components/ChatMessage";

export default class ChatRoomScreen extends React.Component{
  render() {
    //const route = useRoute();
    return(
      <View style={styles.background}>
        <FlatList
          data={chats.messages}
          renderItem={({ item }) => <ChatMessage message={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  background: {
    backgroundColor: '#f3f3f3',
  }
});
