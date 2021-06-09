import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from "../styles";

export default ({navigation})=> {

    return (
        <View style={styles.container}>
            <Text>Welcome to Chat List</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("ChatBox")}>
                <Text>Go to Chat Box</Text>
            </TouchableOpacity>
        </View>
    );
}