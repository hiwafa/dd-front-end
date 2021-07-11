import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';



const ChatListItem = ({ chatRoom }) => {

  const navigation = useNavigation();

  const getAllName = ()=> {

    const {participants} = chatRoom;

    if(participants.length > 1){
      return `${participants[0].first_name}, ${participants[1].first_name}, ...`;
    }

    return `${participants[0].first_name} ...`;

  };

  const onClick = () => {
    navigation.navigate('ChatBox', {
      chatId: chatRoom.id,
      name: getAllName()
    })
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {/* <Image source={{ uri: "" }} style={styles.avatar}/> */}

          <View style={styles.midContainer}>
            <Text style={styles.username}>{getAllName()}</Text>
            <Text numberOfLines={1} style={styles.lastMessage}>No Last Message</Text>
          </View>
        </View>
        <Text style={styles.time}>{moment(new Date(chatRoom.last_activity)).format("DD/MM/YYYY")}</Text>
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
    borderRadius: 15,
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
    fontSize: 11,
    color: 'grey',
  },
  time: {
    fontSize: 11,
    color: 'grey'
  }
});

export default ChatListItem;
