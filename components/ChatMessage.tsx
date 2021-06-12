import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Message } from "../../types";
import moment from "moment";

export type ChatMessageProps = {
  messages: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
  const {message} = props;

  const myMessage = () => {
    return message.user.id == 'u1';
  };

  return (
    <View style={styles.container}>
      <View style={[
        styles.message, {
            backgroundColor: myMessage() ? 'gray' : '#2037A5',
            marginLeft: myMessage() ? 50 : 0,
            marginRight: myMessage() ? 0 : 50,
        }
      ]}>
        <Text style={styles.content}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    padding: 10,
  },
  message: {
    borderRadius: 5,
    padding: 10,
  },
  content: {
    color: 'white',
    fontSize: 16,
  },
  time: {
    alignSelf: "flex-end",
    color: 'lightgray',
    fontSize: 11,
  }
});

export default ChatMessage;
