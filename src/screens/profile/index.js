import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform } from 'react-native';


import { Ionicons, Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { styles } from "../styles";
import { localStyle } from "./style";

export default ({ navigation }) => {



    const pickImage = async () => {

        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Please Allow to add a photo!');
                return;
            }
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            // add the image
        }
    };


    return (
        <View style={styles.container}>

            <View style={localStyle.profielImageView}>
                <TouchableOpacity style={localStyle.profileImage} onPress={pickImage}>
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

                <View style={localStyle.topicsView}>
                    <Text style={localStyle.topicsLable}>Topics</Text>
                    <TouchableOpacity>
                        <Text style={{ ...localStyle.topicsLable, color: '#301C88' }}>Add topics</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}