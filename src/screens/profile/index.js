import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';


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
                <Text style={{ ...styles.smallTitle }}>Personal Information</Text>

                <View style={localStyle.inputTextView}>
                    <Text style={localStyle.inputLable}>Username: </Text>
                    <TextInput
                        style={localStyle.inputText}
                    />
                    <TouchableOpacity style={localStyle.inputClearIconView}>
                        <Text style={localStyle.inputClearIcon}>x</Text>
                    </TouchableOpacity>
                </View>

                <View style={localStyle.inputTextView}>
                    <Text style={localStyle.inputLable}>Given name: </Text>
                    <TextInput
                        style={localStyle.inputText}
                    />
                    <TouchableOpacity style={localStyle.inputClearIconView}>
                        <Text style={localStyle.inputClearIcon}>x</Text>
                    </TouchableOpacity>
                </View>

                <View style={localStyle.inputTextView}>
                    <Text style={localStyle.inputLable}>Family name: </Text>
                    <TextInput
                        style={localStyle.inputText}
                    />
                    <TouchableOpacity style={localStyle.inputClearIconView}>
                        <Text style={localStyle.inputClearIcon}>x</Text>
                    </TouchableOpacity>
                </View>


                <Text>{"\n"}</Text>

                <Text style={{ ...styles.smallTitle }}>Login Details</Text>

                <View style={localStyle.inputTextView}>
                    <Text style={localStyle.inputLable}>Email: </Text>
                    <TextInput
                        style={localStyle.inputText}
                    />
                    <TouchableOpacity style={localStyle.inputClearIconView}>
                        <Text style={localStyle.inputClearIcon}>x</Text>
                    </TouchableOpacity>
                </View>

                <View style={localStyle.inputTextView}>
                    <Text style={localStyle.inputLable}>Password: </Text>
                    <TextInput
                        style={localStyle.inputText}
                    />
                    <TouchableOpacity style={localStyle.inputClearIconView}>
                        <Text style={localStyle.inputClearIcon}>x</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}