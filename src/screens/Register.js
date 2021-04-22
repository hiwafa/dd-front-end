import React from 'react';
import {ImageBackground, StyleSheet,Text,View,Image,TextInput} from 'react-native';

export default class Register extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:'black', height:'100%'}}>
                <ImageBackground source={require('../res/login_background_image.png')} style={{height:'100%'}}>
                <Image source={require('../res/dd_logo_whiteText_horizontal.svg')} style={styles.logo}/>
                {/*BACKGROUND VIEW*/}

                <View style={styles.registerContainer}>
                    {/*REGISTER VIEW*/}

                    <Text style={styles.header}>Welcome,</Text>
                    <Text style={styles.header}>Sign up here</Text>

                    {/*Input fields*/}
                    <Text style={styles.fieldText}>Email address</Text>
                    <View style={styles.field}>
                        <TextInput placeholder='Enter your email' style={{paddingHorizontal:10, width:'100%'}}/>
                    </View>

                    <Text style={styles.fieldText}>Password</Text>
                    <View style={styles.field}>
                        <TextInput secureTextEntry placeholder='Enter password' style={{paddingHorizontal:10, width:'100%'}}/>
                    </View>

                    <Text style={styles.fieldText}>Confirm Password</Text>
                    <View style={styles.field}>
                        <TextInput secureTextEntry placeholder='Confirm password' style={{paddingHorizontal:10, width:'100%'}}/>
                    </View>

                    {/*Buttons*/}
                    <View style={styles.button}>
                        <Text onPress={() => navigate('Login')} style={{color:'white'}}>
                            Create account
                        </Text>
                    </View>

                </View>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  field: {
    flexDirection:'row',
    alignItem:'center',
    marginTop:4,
    marginHorizontal:25,
    paddingHorizontal:10,
    paddingVertical:20,
    borderRadius:16,
    backgroundColor:'#F1F3F9'
  },
  button: {
    marginHorizontal:25,
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,
    backgroundColor:'#FF4773',
    paddingVertical:20,
    borderRadius:32,
    marginBottom:'12%'
  },
  fieldText: {
    color:'black',
    marginHorizontal:25,
    marginTop:50
  },
  header: {
    textAlign:'center',
    color:'black',
    fontSize: 36,
    fontWeight: "bold"
  },
  logo: {
    marginVertical:50,
    marginHorizontal:75,
    height:'4%',
    resizeMode: 'contain'
  },
  registerContainer: {
    backgroundColor:'#fff',
    borderRadius:16,
    marginHorizontal:55,
    paddingTop:40
  },
});