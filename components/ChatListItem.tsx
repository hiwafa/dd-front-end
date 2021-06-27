import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { chatRoom } from "../types";
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

export type ChatListItemProps = {
  chatRoom: chatRoom;
}

// export function authHeader() {
//   // return authorization header with basic auth credentials
//   let user = JSON.parse(localStorage.getItem('user'));
//
//   if (user && user.access_token) {
//       return { Authorization: `Bearer ${user.token}` };
//   } else {
//       return {};
//   }
// }

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const navigation = useNavigation();
  const user = chatRoom.users[1];

  // useEffect(() => {
  //   fetch('https://api.deepdialog.se/chat/', {
  //     {
  //       method: 'get',
  //       headers: new Headers({
  //       })
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json.chat)
  //       return json.chat;
  //     })
  //     .catch((error) => {
  //     console.error(error);
  //   });
  // });

  const onClick = () => {
    navigation.navigate('ChatBox', { name: user.name, userImage: user.imageUri })
    console.warn('Clicked on ' + user.name);
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar}/>

          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
          </View>
        </View>
        <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
      </View>
    </TouchableWithoutFeedback>
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
