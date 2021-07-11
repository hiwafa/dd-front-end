import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { setMessage } from '../store/actions/ChatsSlice';
import { useDispatch } from "react-redux";
import { request } from '../api';
const qs = require('qs');

const InputTextBox = ({ chatId, userid, token }) => {

  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onSendPress = async () => {
    try {

      dispatch(setMessage({
        chatId,
        newMessage: {
          content: text, sender: userid,
          timestamp: (new Date()).getTime(),
          id: Math.round(Math.random() * 9999999)
        }
      }));


      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${token}`
      };

      await request(`chat/message/`, {
        method: "POST", headers, data: qs.stringify({
          chat_id: chatId, content: text
        })
      });

    } catch (err) {
      alert(err.message)
    }

    setText("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.micContainer}>
          <MaterialCommunityIcons name="microphone" size={30} color="#2037A5" />
        </View>
        <TextInput
          placeholder={"Type a new message..."}
          style={styles.textInputBox}
          multiline
          value={text}
          onChangeText={text => setText(text)}
        />
        <View style={{ width: 100, marginLeft: 10 }}>
          <TouchableOpacity style={styles.sendButton} onPress={onSendPress}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    paddingBottom: 10
  },
  mainContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    marginHorizontal: 10,
    flex: 1,
  },
  micContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textInputBox: {
    alignSelf: 'center',
    flex: 1,
    marginVertical: 10,
    minHeight: 30,
    paddingTop: 5,
  },
  sendButton: {
    justifyContent: 'center',
    backgroundColor: "#2037A5",
    borderRadius: 50,
    flex: 1,
  },
  sendText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default InputTextBox;
