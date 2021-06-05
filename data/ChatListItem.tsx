import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import { chatRoom } from "../types";

export type ChatListItemProps = {
  chatRoom: chatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const user = chatRoom.users[1];

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar}/>

        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>


      <Text style={styles.time}>Yesterday</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 18,
  },
  container: {
    backgroundColor: '#EFDDBB',
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-around',
  },
  username: {
    fontSize: 16,
  },
  lastMessage: {
    fontsize: 11,
    color: 'grey',
  },
  time: {
    fontsize: 11,
    color: 'grey',
    fontSize: 10,
  }
});

export default ChatListItem;
