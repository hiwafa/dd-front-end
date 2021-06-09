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


const TabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ChatList" component={ChatList} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default () => {

    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        /*
            we can add some logic here to check wether is logged in or not
            Here we just suppose we logged in
        */

        const checkLogin = true;
        if (checkLogin) {
            setLoggedIn(true);
        }

    }, []);



    return (
        <NavigationContainer>
            {
                isLoggedIn === false ?
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                        initialRouteName="Login"
                    >
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                    </Stack.Navigator>
                    :
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
            }
        </NavigationContainer>
    );
}