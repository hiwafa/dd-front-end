import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from "../styles";

export default ({navigation})=> {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to Settings</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("ChatList")}>
                <Text>Go To Chat List</Text>
            </TouchableOpacity>
        </View>
    );
}