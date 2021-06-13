import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from "./screens/login";
import Register from "./screens/register";
import Profile from "./screens/profile";
import ChatBox from "./screens/chatbox";
import ChatList from "./screens/chatlist";
import Settings from "./screens/settings";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import styles from "./screens/styles";


const SplashScreen = () => {

    return (
        <View style={styles.container}>
            <Text>Welcome to our app</Text>
        </View>
    );
}

const TabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ChatList" component={ChatList} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default () => {

    const [isLoggedIn, setLoggedIn] = useState(0);

    useEffect(() => {
        /*
            we can add some logic here to check wether is logged in or not
            Here we just suppose we logged in
        */

        const checkLogin = true;

        if (checkLogin) {
            setLoggedIn(1);
        } else {
            setLoggedIn(2);
        }

    }, []);


    const loadScreens = () => {
        if (isLoggedIn === 0) return <SplashScreen />;
        if (isLoggedIn === 1) return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="TabNav"
            >

                <Stack.Screen name="TabNav" component={TabNav} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="ChatBox" component={ChatBox} />
            </Stack.Navigator>
        )

        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            {loadScreens()}
        </NavigationContainer >
    );
}
