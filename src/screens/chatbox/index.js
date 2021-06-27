import React, { useRef } from 'react';
import { Text, FlatList, View, StyleSheet, Image, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import chats from '../../../data/chats';
import ChatMessage from "../../../components/ChatMessage";
import InputTextBox from "../../../components/InputTextBox";
import { useHeaderHeight } from '@react-navigation/stack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function(props) {
  const route = useRoute();
  const headerHeight = useHeaderHeight();
  return <ChatBox {...props} route={route} headerHeight={headerHeight} />;
}


export class ChatBox extends React.Component{
  render() {
    const headerHeight = this.props.headerHeight;
    const viewHeight = windowHeight-headerHeight;
    const route = this.props.route;
    return(
      <View style={[styles.background, {height: viewHeight}]}>
        <ScrollView>
          <FlatList
            ref={ ( ref ) => this.scrollView = ref }
            onContentSizeChange={ () => {this.scrollView.scrollToEnd({ animated: true })}}
            style={{height: viewHeight-headerHeight}}
            data={chats.messages}
            renderItem={({ item }) => <ChatMessage message={item}/>}
          />
        </ScrollView>

        <KeyboardAvoidingView
           style={{position: 'absolute', left: 0, right: 0, bottom: 0}}
           behavior="position">
          <InputTextBox
            style={{position: 'absolute', left: 0, right: 0, bottom: 0}}
            behavior="position"/>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  background: {
    backgroundColor: '#f3f3f3',
  },
});
