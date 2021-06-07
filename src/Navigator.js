import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./screens/login";
import Register from "./screens/register";
import Profile from "./screens/profile";


const Stack = createStackNavigator();

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
                        initialRouteName="Profile"
                    >
                        <Stack.Screen name="Profile" component={Profile} />
                    </Stack.Navigator>
            }
        </NavigationContainer>
    );
}