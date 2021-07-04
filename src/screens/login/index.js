import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default ({ navigation: { navigate } }) => {

  return (
    <View style={{ backgroundColor: 'black', height: '100%' }}>
      <ImageBackground source={require('../../res/login_background_image.png')} style={{ height: '100%' }}>
        <Image source={require('../../res/dd_logo_whiteText_horizontal.svg')} style={styles.logo} />
        {/*BACKGROUND VIEW*/}

        <View style={styles.loginContainer}>
          {/*LOGIN VIEW*/}

          <Text style={styles.header}>Welcome,</Text>
          <Text style={styles.header}>Log in here</Text>

          {/*Input fields*/}
          <Text style={styles.fieldText}>Email address</Text>
          <View style={styles.field}>
            <TextInput placeholder='Enter your email' style={{ paddingHorizontal: 10, width: '100%' }} />
          </View>

          <Text style={styles.fieldText}>Password</Text>
          <View style={styles.field}>
            <TextInput secureTextEntry placeholder='Enter your password' style={{ paddingHorizontal: 10, width: '100%' }} />
          </View>

          {/*Buttons*/}
          <View style={styles.button}>
            <Text style={{ color: 'white' }}>
              Login
            </Text>
          </View>

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
    </View>
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