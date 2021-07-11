import React from 'react';
import { useRoute } from '@react-navigation/native';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function(props) {
  return <UserImage {...props} />;
}

export class UserImage extends React.Component{
  render() {
    const props = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: props.userImage}}
          style={{width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
        />
      </View>
    );
  }
}
