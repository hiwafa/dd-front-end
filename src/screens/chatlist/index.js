import * as React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { chatRoom } from "../../../types";
import rooms from '../../../data/rooms';
import ChatListItem from "../../components/ChatListItem";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ChatList extends React.Component{
    ItemSeprator = () => <View style={{
      height: 15,
      width: windowWidth -40,
      backgroundColor: "#fbf2e1",
    }} />
    render(){
      const {navigate} = this.props.navigation
      return(
        <View style={{backgroundColor: '#fbf2e1', width: windowWidth}}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Recent Conversations</Text>
          </View>
          <View style={styles.mainContainer}>
            <ScrollView styles={{width: '100%'}}>
              <View style={styles.container}>
                <FlatList
                  scrollEnabled={true}
                  data={rooms}
                  ItemSeparatorComponent={this.ItemSeprator}
                  renderItem={({ item }) => <ChatListItem style={styles.listItem} chatRoom={item} />}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
}


const styles = StyleSheet.create ({
  mainContainer: {
    height: windowHeight-125,
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
    height: 50,
    marginLeft: 20,
    marginTop: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  listItem: {
    paddingBottom: 20,
    width: '100%',
  }
});
