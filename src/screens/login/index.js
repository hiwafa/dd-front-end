import React, { useReducer } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/UserSlice";

export default ({ navigation: { navigate } }) => {


  const [state, setState] = useReducer((_, v) => v, {
    password: "", username: ""
  });

  const dispatch = useDispatch();

  const onLogin = async () => {
    try {
      const { password, username } = state;
      if (password.length > 5 && username.length > 2) {

        const { payload } = await dispatch(signin({
          grant_type: "password", password, username
        }));

        if (payload && payload.access_token && payload.expires_in) { 
          
        } else {
          alert("Something went wrong, please try again!");
        }

      } else {

        alert("Please fill the correct value");
      }
    } catch (err) {

    }
  }

  return (
    <ImageBackground source={require('../../res/login_background_image.png')} style={{ backgroundColor: 'black', height: '100%' }}>
      <Image source={require('../../res/dd_logo_whiteText_horizontal.svg')} style={styles.logo} />
      {/*BACKGROUND VIEW*/}

      <View style={styles.loginContainer}>
        {/*LOGIN VIEW*/}

        <Text style={styles.header}>Welcome,</Text>
        <Text style={styles.header}>Log in here</Text>

        {/*Input fields*/}
        <Text style={styles.fieldText}>Username</Text>
        <View style={styles.field}>
          <TextInput placeholder='Enter your username' style={{ paddingHorizontal: 10, width: '100%' }}
            onChangeText={ username => {
              setState({ ...state, username });
            }}
          />
        </View>

        <Text style={styles.fieldText}>Password</Text>
        <View style={styles.field}>
          <TextInput secureTextEntry placeholder='Enter your password' style={{ paddingHorizontal: 10, width: '100%' }}
            onChangeText={password => {
              setState({ ...state, password });
            }}
          />
        </View>

        {/*Buttons*/}
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={{ color: 'white' }}>
            Login
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', paddingVertical: '10%', marginTop: 20, marginHorizontal: 10 }}>
          <Text onPress={() => navigate('Register')} style={styles.linkLeft}>
            Forgot password?
          </Text>
          <Text onPress={() => navigate('Register')} style={styles.linkRight}>
            Create account
          </Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 16,
    backgroundColor: '#F1F3F9'
  },
  button: {
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#FF4773',
    paddingVertical: 20,
    borderRadius: 32
  },
  linkRight: {
    color: '#929292',
    textDecorationLine: 'underline',
    position: 'absolute',
    right: 25
  },
  linkLeft: {
    color: '#929292',
    textDecorationLine: 'underline',
    position: 'absolute',
    left: 25
  },
  fieldText: {
    color: 'black',
    marginHorizontal: 25,
    marginTop: 50
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
  loginContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 55,
    paddingTop: 40
  },
});