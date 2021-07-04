import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

const InputTextBox = () => {
  const [message, setMessage] = useState();

  const onSendPress = () => {
    console.log('Sending:' + message)
    setMessage('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.micContainer}>
          <MaterialCommunityIcons name="microphone" size={30} color="#2037A5"/>
        </View>
        <TextInput
          placeholder={"Type a new message..."}
          style={styles.textInputBox}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <View style={{width: 100, marginLeft: 10}}>
          <TouchableOpacity style={styles.sendButton} onPress={onSendPress}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
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
    paddingTop: 5,
  },
  sendButton: {
    justifyContent: 'center',
    backgroundColor: "#2037A5",
    borderRadius: 50,
    flex: 1,
  },
  sendText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default InputTextBox;
