import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default () => {

    return (
        <View style={styles.container}>
            <Text>Poeple</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
