import * as React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { chatRoom } from "../../../types";
import rooms from '../../../data/rooms';
import ChatListItem from "../../components/ChatListItem";

import { useSelector } from "react-redux";
import { getChats } from '../../store/actions/ChatsSlice';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default ({ navigation: { navigate } }) => {

  const chats = useSelector(getChats);

  console.log("chats", chats);

  const ItemSeprator = () => <View style={{
    height: 15,
    width: windowWidth - 40,
    backgroundColor: "#fbf2e1",
  }} />

  return (
    <View style={{ backgroundColor: '#fbf2e1', width: windowWidth }}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Recent Conversations</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <FlatList
            scrollEnabled={true}
            data={chats}
            ItemSeparatorComponent={ItemSeprator}
            renderItem={({ item }) => <ChatListItem style={styles.listItem} chatRoom={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    height: windowHeight - 125,
    width: '100%',
    backgroundColor: '#fbf2e1',
    paddingBottom: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbf2e1',
    width: '100%'

  },
  topContainer: {
    backgroundColor: '#fbf2e1',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30
  },
  listItem: {
    paddingBottom: 20,
    width: '100%',
  }
});
