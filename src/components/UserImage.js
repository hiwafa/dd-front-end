import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default ({ userImage }) => {

  const { navigate, goBack } = useNavigation();

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={{ marginLeft: 10, marginTop: 10 }}
        onPress={() => {
          goBack();
        }}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Image
        source={{ uri: userImage }}
        style={{
          width: 40, height: 40,
          borderRadius: 40 / 2, marginLeft: 15
        }}
      />
    </View>
  );

}
