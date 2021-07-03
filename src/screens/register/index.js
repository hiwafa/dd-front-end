import React, { useReducer } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default ({ navigation: { navigate } }) => {

  const [state, setState] = useReducer((_, v)=> v, {
    username: null, password: null, email: null
  });

  return (
    <View style={{ backgroundColor: 'black', height: '100%' }}>
      <ImageBackground source={require('../../res/login_background_image.png')} style={{ height: '100%' }}>
        <Image source={require('../../res/dd_logo_whiteText_horizontal.svg')} style={styles.logo} />
        {/*BACKGROUND VIEW*/}

        <View style={styles.registerContainer}>
          {/*REGISTER VIEW*/}

          <Text style={styles.header}>Welcome,</Text>
          <Text style={styles.header}>Sign up here</Text>

          {/*Input fields*/}
          <Text style={styles.fieldText}>Email address</Text>
          <View style={styles.field}>
            <TextInput placeholder='Enter your email' style={{ paddingHorizontal: 10, width: '100%' }} />
          </View>

          <Text style={styles.fieldText}>Username</Text>
          <View style={styles.field}>
            <TextInput placeholder='Enter your username' style={{ paddingHorizontal: 10, width: '100%' }} />
          </View>

          <Text style={styles.fieldText}>Password</Text>
          <View style={styles.field}>
            <TextInput secureTextEntry placeholder='Enter password' style={{ paddingHorizontal: 10, width: '100%' }} />
          </View>

          <Text style={styles.fieldText}>Confirm Password</Text>
          <View style={styles.field}>
            <TextInput secureTextEntry placeholder='Confirm password' style={{ paddingHorizontal: 10, width: '100%' }} />
          </View>

          {/*Buttons*/}
          <View style={styles.button}>
            <Text onPress={() => navigate('Login')} style={{ color: 'white' }}>
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
    marginTop: 50,
    backgroundColor: '#FF4773',
    paddingVertical: 20,
    borderRadius: 32,
    marginBottom: '12%'
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
    marginHorizontal: 55,
    paddingTop: 40
  },
});