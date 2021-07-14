import React, { useReducer } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { signup } from "../../store/actions/UserSlice";
import { ScrollView } from 'react-native-gesture-handler';


export default ({ navigation: { navigate } }) => {

  const [state, setState] = useReducer((_, v) => v, {
    username: "", password: "", email: "",
    confirmpass: ""
  });

  const dispatch = useDispatch();

  const createAccount = async () => {
    try {
      const { username, password, email, confirmpass } = state;
      if (username.length > 2 && password.length > 5 && password === confirmpass && email.length > 4) {

        const dispatchedResult = await dispatch(signup({
          grant_type: "password",
          username, password, email
        }));

        const result = unwrapResult(dispatchedResult);

        if (result && result.access_token && result.expires_in) {
          
        } else {
          
          alert("Something went wrong, please try again!");
        }

      } else {

        alert("Please fill the correct value");
      }
    } catch (err) {

    }
  };

  return (
    <ImageBackground source={require('../../res/login_background_image.png')} style={{ backgroundColor: 'black', height: '100%' }}>
      {/*BACKGROUND VIEW*/}

      <ScrollView>
        {/* <Image source={require('../../res/dd_logo_whiteText_horizontal.svg')} style={styles.logo} /> */}
        <View style={styles.registerContainer}>
          {/*REGISTER VIEW*/}

          <Text style={styles.header}>Welcome,</Text>
          <Text style={styles.header}>Sign up here</Text>

          {/*Input fields*/}
          <Text style={styles.fieldText}>Email address</Text>
          <View style={styles.field}>
            <TextInput placeholder='Enter your email' style={{ paddingHorizontal: 10, width: '100%' }}
              onChangeText={email => {
                setState({ ...state, email });
              }}
            />
          </View>

          <Text style={styles.fieldText}>Username</Text>
          <View style={styles.field}>
            <TextInput placeholder='Enter your username' style={{ paddingHorizontal: 10, width: '100%' }}
              onChangeText={username => {
                setState({ ...state, username });
              }}
            />
          </View>

          <Text style={styles.fieldText}>Password</Text>
          <View style={styles.field}>
            <TextInput secureTextEntry placeholder='Enter password' style={{ paddingHorizontal: 10, width: '100%' }}
              onChangeText={password => {
                setState({ ...state, password });
              }}
            />
          </View>

          <Text style={styles.fieldText}>Confirm Password</Text>
          <View style={styles.field}>
            <TextInput secureTextEntry placeholder='Enter password' style={{ paddingHorizontal: 10, width: '100%' }}
              onChangeText={confirmpass => {
                setState({ ...state, confirmpass });
              }}
            />
          </View>

          {/*Buttons*/}
          <TouchableOpacity style={styles.button} onPress={createAccount}>
            <Text style={{ color: 'white' }}>
              Create account
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 16,
    backgroundColor: '#F1F3F9'
  },
  button: {
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4773',
    borderRadius: 32,
    marginBottom: '12%',
    marginTop: 50,
    height: 50
  },
  fieldText: {
    color: 'black',
    marginHorizontal: 25,
    marginTop: 20
  },
  header: {
    textAlign: 'center',
    color: 'black',
    fontSize: 36,
    fontWeight: "bold"
  },
  logo: {
    marginVertical: 50,
    marginHorizontal: 75,
    height: '4%',
    resizeMode: 'contain'
  },
  registerContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 25,
    marginVertical: 25,
    paddingTop: 20
  },
});