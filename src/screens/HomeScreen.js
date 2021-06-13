import React, { Component } from 'react';
import {  ImageBackground, 
          StyleSheet, 
          Paragraph, 
          Title, 
          Text, 
          Item, 
          SafeAreaView, 
          Icon, 
          Card, 
          Button, 
          ScrollView, 
          Flatlist,
          View,
          Image,
          Dimensions,
          TextInput} 
from 'react-native';

import Category from './components/Explore/Category';

/* Device dimenstions */
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
/* COLORS *//*
  const COLORS = {
    secondaryHighlight4: '#F0E1E1',
    secondaryHighlight3: '#F1F3F9',
    secondaryHighlight2: '#C5DBEF',
    secondaryHighlight1: '#BDC3E5',
    secondaryGreen: '#59A364',
    primaryBlue: '#2037A5',
    primaryPink: '#FF4773',
    baseGrey: '#929292',
    menu: '#F5F5F5',
    baseWhite: '#FFFFFF',
    baseBlack: '#000000',
}

/* Font/text values *//*
const textStyles = {
  unnamedfontDamilyDmSans: 'DM Sans',
  unnamedfontStyleNormal: normal,
  unnamedfontWeightBold: bold,
  unnamedfontWeightNormal: normal,
  unnamedfontWeightMedium: medium,
  unnamedfontSize8: 8,
  unnamedfontSize10: 10,
  unnamedfontSize12: 12,
  unnamedfontSize245: 24.5,
  unnamedcharacterSpacing0: 0,
  unnamedlineSpacing10: 10,
  unnamedlineSpacing12: 12,
  unnamedlineSpacing16: 16,
  unnamedlineSpacing46: 46,
}*/

export default class HomeScreen extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(
           <View style={{backgroundColor:'white', height: windowHeight,}}>
              <ScrollView scrollEventThrottle={16} showsHorizontalScrollIndicator={false}> 
                <View>
                  <Text style={styles.headerH1}>My Upcoming Calls</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                     <Category 
                        imageUri={require('../res/login_background_image.png')}
                        cardHeader={'Music'}
                        cardInfo={'HipHop'}/>
					 <Category 
                        imageUri={require('../res/login_background_image.png')}
                        cardHeader={'Music'}
                        cardInfo={'HipHop'}/>
                     <Category 
                        imageUri={require('../res/login_background_image.png')}/>
                     <Category 
                        imageUri={require('../res/login_background_image.png')}/>
                  </ScrollView>
                  <Text style={styles.header}>Daily Matches</Text>
                  <Text style={styles.subHeader}>Start an anonymous conversation</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      <Category 
                        imageUri={require('../res/login_background_image.png')}/>
                      <Category 
                        imageUri={require('../res/login_background_image.png')}/>
                      <Category 
                        imageUri={require('../res/login_background_image.png')}/>
                  </ScrollView>
                  <Text style={styles.header}>Daily Public Calls</Text>
                  <Text style={styles.subHeader}>Pick a topic and join the call anonymously</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      <Category 
                        imageUri={require('../res/login_background_image.png')}/>
                      <Category 
                        imageUri={require('../res/login_background_image.png')}/>
                      <Category 
                        imageUri={require('../res/login_background_image.png')}/>
                  </ScrollView>
                  <Text style={styles.header}>Trending Topics</Text>
                  <Text style={styles.subHeader}>Pick a topic and join the call anonymously</Text>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      <Category 
                        imageUri={require('../res/login_background_image.png')}/>
                      <Category 
                        imageUri={require('../res/login_background_image.png')}/>
                      <Category 
                        imageUri={require('../res/login_background_image.png')}/>
                  </ScrollView>
                </View>
              </ScrollView>                     
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
  headerH1: {
    top: 46,
    left: 16,
    width: 238,
    height: 32,
    marginBottom: 55,
    fontSize: 24.5,
    textAlign: "left",
    letterSpacing: 0,
    color: "#000000",
    opacity: 1,
},
	header: {	
		left: 16,
		marginTop: 10,
		marginBottom: 10,
		fontSize: 24.5,
		textAlign: "left",
		letterSpacing: 0,
		color: "#000000",
		opacity: 1,
	},
	subHeader: {
		left: 16,
		marginBottom: 5,
		fontSize: 15,
		textAlign: "left",
		letterSpacing: 0,
		color: "#000000",
		opacity: 1,
	}
});


