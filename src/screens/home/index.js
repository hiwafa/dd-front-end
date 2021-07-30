import React from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native';
const backImage = require('../../res/login_background_image.png');
import Category from '../../components/Explore/Category';
const windowHeight = Dimensions.get('window').height;

export default () => (
  <View style={{ backgroundColor: 'white', height: windowHeight, }}>
    <ScrollView scrollEventThrottle={16} showsHorizontalScrollIndicator={false}>
      <View>
        <Text style={styles.headerH1}>My Upcoming Calls</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category
            imageUri={backImage}
            cardHeader={'Music'}
            cardInfo={'HipHop'} />
          <Category
            imageUri={backImage}
            cardHeader={'Music'}
            cardInfo={'HipHop'} />
          <Category
            imageUri={backImage} />
          <Category
            imageUri={backImage} />
        </ScrollView>
        <Text style={styles.header}>Daily Matches</Text>
        <Text style={styles.subHeader}>Start an anonymous conversation</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category
            imageUri={backImage} />
          <Category
            imageUri={backImage} />
          <Category
            imageUri={backImage} />
        </ScrollView>
        <Text style={styles.header}>Daily Public Calls</Text>
        <Text style={styles.subHeader}>Pick a topic and join the call anonymously</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category
            imageUri={backImage} />
          <Category
            imageUri={backImage} />
          <Category
            imageUri={backImage} />
        </ScrollView>
        <Text style={styles.header}>Trending Topics</Text>
        <Text style={styles.subHeader}>Pick a topic and join the call anonymously</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category
            imageUri={backImage} />
          <Category
            imageUri={backImage} />
          <Category
            imageUri={backImage} />
        </ScrollView>
      </View>
    </ScrollView>
  </View>
);

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
