import React from 'react';
import {StyleSheet,Text,View,Image,TextInput} from 'react-native';

export default class Login extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:'#fff', height:'100%'}}>
                <Image source={require('../res/icon.png')} style={{width:'100%', height:'50%'}}/>

                <View style={styles.field}>
                    <TextInput placeholder='name@email.com' style={{paddingHorizontal:10, width:'100%'}}/>
                </View>

                <View style={styles.field}>
                    <TextInput secureTextEntry placeholder='password' style={{paddingHorizontal:10, width:'100%'}}/>
                </View>

                <View style={styles.button}>
                    <Text style={{color:'white'}}>
                        Sign In
                    </Text>
                </View>

                <Text onPress={() => navigate('Register')} style={{ alignSelf:'center', paddingVertical:30 }}>
                    Sign Up
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  field: {
    flexDirection:'row',
    alignItem:'center',
    marginTop:20,
    marginHorizontal:55,
    paddingHorizontal:10,
    paddingVertical:2,
    borderWidth:2,
    borderRadius:25,
  },
  button: {
    marginHorizontal:55,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    backgroundColor:'#000',
    paddingVertical:5,
    borderRadius:25
  },
});