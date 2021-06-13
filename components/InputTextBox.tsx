import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

const InputTextBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.micContainer}>
          <MaterialCommunityIcons name="microphone" size={30} color="#2037A5"/>
        </View>
        <TextInput
          style={styles.textInputBox}
          multiline
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
  },
  mainContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    marginHorizontal: 10,
    flex: 1,
  },
  micContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textInputBox: {
    alignSelf: 'center',
    flex: 1,
    marginVertical: 10,
    minHeight: 30,
  },
  sendButton: {
    justifyContent: 'center',
    backgroundColor: "#2037A5",
    borderRadius: 50,
    flex: 1,
    marginLeft: 50,
  },
  sendText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default InputTextBox;
