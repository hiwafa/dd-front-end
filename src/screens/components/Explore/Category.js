import React, { Component } from "react";
import {  Text, 
          View, 
          StyleSheet, 
          Image 
        } from 'react-native';


export default class Category extends Component {
    render() {
        return (
            <View style={{ height: 176, width: 112, marginLeft: 16, borderWidth: 0.5, marginTop: 10, borderColor: '#dddddd', borderRadius: 10}}>
                <View style={{ flex: 2, }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null }}/>
                </View>
                <View style={{ flex: 2, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.cardInfo}</Text>
                    <Text style={styles.cardHeader}>{this.props.cardHeader}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    cardHeader: {
      fontFamily: 'DMSans-Bold.ttf',
      fontStyle: "normal",
      fontSize: 8,
      lineHeight: 16,
      letterSpacing: 16,
      color: '#929292',
    }
    /* Character Styles */
  /*cardInfo: {
    fontFamily: var(unnamedfontFamilyDmSans),
    fontStyle: var(unnamedfontStyleNormal),
    fontWeight: var(unnamedfontWeightMedium),
    fontSize: var(unnamedfontSize8),
    lineHeight: var(unnamedlineSpacing16),
    letter-spacing: var(unnamedcharacterSpacing0),
    color: var(unnamedColor929292),
},
},
  subheading: {
    fontFamily: var(unnamedfontSamilyDmSans),
    fontStyle: var(unnamedfontStyleNormal),
    fontWeight: var(unnamedfontWeightNormal),
    fontSize: var(unnamedfontSize12),
    lineHeight: var(unnamedlineSpacing10),
    letter-spacing: var(unnamedcharacterSpacing0),
    color: var(unnamedColor000000),*/
});
