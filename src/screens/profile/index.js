import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import { Ionicons, Entypo } from '@expo/vector-icons';

import { styles } from "../styles";
import { localStyle } from "./style";

export default ({ navigation }) => {


    return (
        <View style={styles.container}>

            <View style={localStyle.profielImageView}>
                <TouchableOpacity style={localStyle.profileImage}>
                    <Entypo name="camera" size={45} color="grey" />
                </TouchableOpacity>
                <Text>Edit Profile Picture</Text>
            </View>

            <View style={localStyle.buttonContainer}>
                <Text style={{...styles.smallTitle}}>Personal Information</Text>
            </View>
        </View>
    );
}