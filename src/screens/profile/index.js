import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import { Ionicons, Entypo } from '@expo/vector-icons';

import { styles } from "../styles";
import { localStyle } from "./style";

export default ({ navigation }) => {


    return (
        <View style={styles.container}>

            <>
                <TouchableOpacity style={localStyle.profileImageView}>
                    <Entypo name="camera" size={45} color="grey" />
                </TouchableOpacity>
                <Text>Edit Profile Picture</Text>
            </>


            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Text>Go to Settings</Text>
            </TouchableOpacity>
        </View>
    );
}