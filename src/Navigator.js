import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./screens/login";
import Register from "./screens/register";
import Profile from "./screens/profile";


const Stack = createStackNavigator();

export default () => {

    return (
        <NavigationContainer

        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}