import React, { memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Message } from "../../types";
import moment from "moment";



export default memo(({message, userid}) => {


  const myMessage = message.sender === userid;

  return (
    <View style={[
      styles.container, {
        alignSelf: myMessage ? 'flex-end' : 'flex-start'
      }
    ]}>
      <View style={[
        styles.message, {
            backgroundColor: myMessage ? 'gray' : '#2037A5',
            marginLeft: myMessage ? 50 : 0,
            marginRight: myMessage ? 0 : 50,
            borderTopRightRadius: myMessage ? 0: 10,
            borderTopLeftRadius: myMessage ? 10: 0,
        }
      ]}>
        <Text style={styles.content}>{message.content}</Text>
        <Text style={styles.time}>{moment(new Date(message.timestamp)).fromNow()}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create ({
  container: {
    padding: 10,
    marginTop: 10,
  },
  message: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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