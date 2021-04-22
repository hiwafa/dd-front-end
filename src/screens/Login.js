import React from 'react';
import {StyleSheet,Text,View,Image,TextInput} from 'react-native';

export default class Login extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:'black', height:'100%'}}>
                <Image source={require('../res/dd_logo_whiteText_horizontal.png')} style={styles.logo}/>
                {/*BACKGROUND VIEW*/}

                <View style={styles.loginContainer}>
                    {/*LOGIN VIEW*/}

                    <Text style={styles.header}>Welcome,</Text>
                    <Text style={styles.header}>Log in here</Text>

                    {/*Input fields*/}
                    <Text style={styles.fieldText}>Email address</Text>
                    <View style={styles.field}>
                        <TextInput placeholder='Enter your email' style={{paddingHorizontal:10, width:'100%'}}/>
                    </View>

                    <Text style={styles.fieldText}>Password</Text>
                    <View style={styles.field}>
                        <TextInput secureTextEntry placeholder='Enter your password' style={{paddingHorizontal:10, width:'100%'}}/>
                    </View>

                    {/*Buttons*/}
                    <View style={styles.button}>
                        <Text style={{color:'white'}}>
                            Login
                        </Text>
                    </View>

                    <View style={{flexDirection:'column', marginLeft:25, paddingVertical:'6%'}}>
                        <Text onPress={() => navigate('Register')} style={styles.link}>
                            Forgot password?
                        </Text>
                        <Text onPress={() => navigate('Register')} style={styles.link}>
                            Create account
                        </Text>
                    </View>
                </View>

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
    borderRadius:32
  },
  link: {
    color:'#929292',
    textDecorationLine:'underline'
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
    height:'10%',
    marginHorizontal:'25%',
    marginVertical:25
  },
  loginContainer: {
    backgroundColor:'#fff',
    borderRadius:16,
    marginHorizontal:55,
    paddingTop:40
  },
});