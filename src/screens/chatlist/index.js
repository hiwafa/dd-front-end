import * as React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { chatRoom } from "../../../types";
import chats from '../../../data/chats';
import rooms from '../../../data/rooms';
import ChatListItem from "../../../components/ChatListItem";

export default class ChatList extends React.Component{
    ItemSeprator = () => <View style={{
      height: 15,
      width: "100%",
      backgroundColor: "#fbf2e1",
    }} />

    render(){
      const {navigate} = this.props.navigation
      return(
        <View>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Recent Conversations</Text>
          </View>
          <View style={styles.container}>
            <FlatList
              style={{width: '85%'}}
              data={rooms}
              ItemSeparatorComponent={this.ItemSeprator}
              renderItem={({ item }) => <ChatListItem style={styles.listItem} chatRoom={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      );
    }
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbf2e1',

  },
  topContainer: {
    backgroundColor: '#fbf2e1',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 25,
    paddingBottom: 20,
  },
  listItem: {
    flexGrow: 5,
    paddingBottom: 20,
  }
});
