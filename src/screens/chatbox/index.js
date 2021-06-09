import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from "../styles";

export default ({navigation})=> {


    return (
        <View style={styles.container}>
            <Text>Welcome to Chat Box</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Profile")}>
                <Text>Go to Profile</Text>
            </TouchableOpacity>
        </View>
    );
}