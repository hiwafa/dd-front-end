import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from "../styles";

export default ({navigation})=> {


    return (
        <View style={styles.container}>
            <Text>Welcome to Profile</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("ChatList")}>
                <Text>Go to Chat List Tab</Text>
            </TouchableOpacity>
        </View>
    );
}