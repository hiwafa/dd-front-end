import React from 'react';
import { useRoute } from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function(props) {
  return <UserImage {...props} />;
}

export class UserImage extends React.Component{
  render() {
    const props = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginLeft: 10, marginTop: 10}}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        
        <Image
          source={{uri: props.userImage}}
          style={{width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
        />
      </View>
    );
  }
}
