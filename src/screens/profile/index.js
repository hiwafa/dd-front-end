import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from "../styles";

export default ({navigation})=> {


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate("SettingsScreen")}>
                <Text>Go settings</Text>
            </TouchableOpacity>
            
        </View>
    );
}