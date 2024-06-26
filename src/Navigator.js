import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import UserImage from './components/UserImage';

import Home from "./screens/home";
import Login from "./screens/login";
import Poeple from "./screens/people";
import Register from "./screens/register";
import Profile from "./screens/profile";
import ChatBox from "./screens/chatbox";
import ChatList from "./screens/chatlist";
import Settings from "./screens/settings";

import { loadCredential, isLoggedIn } from "./store/actions/UserSlice";
import { fetchChats } from "./store/actions/ChatsSlice";
import { signin } from './store/actions/UserSlice';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import styles from "./screens/styles";

const SplashScreen = () => {

    return (
        <View style={styles.container}>
            <Text>We can display Splash Image Here</Text>
        </View>
    );
}

const TabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="ChatList" component={ChatList}
            // screenOptions={{ drawUnderTabBar: false }}
            />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Poeple" component={Poeple} />
        </Tab.Navigator>
    );
}

import * as SecureStore from 'expo-secure-store';

export default () => {

    const isSingIn = useSelector(isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {

        // SecureStore.deleteItemAsync("credential");
        dispatch(loadCredential(null)).then(async ({ payload }) => {

            const { expires_in, access_token, password, username } = payload;

            if (access_token && expires_in) {

                if ((new Date()).getTime() > expires_in) {

                    alert("token expired, re-login");

                    const dd = await dispatch(signin({
                        grant_type: "password",
                        password, username
                    }));

                    if (dd.payload && dd.payload.access_token
                        && dd.payload.expires_in) {

                        dispatch(fetchChats(dd.payload.access_token));

                    } else {
                        alert("Something went wrong, Navigator line 80");
                    }

                } else {
                    dispatch(fetchChats(access_token));
                }
            };

        }).then(_ => { });

    }, []);

    const loadScreens = () => {

        if (isSingIn === 'loading') return <SplashScreen />;

        if (isSingIn === "loaded") return (
            <Stack.Navigator
                initialRouteName="TabNav"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="TabNav" component={TabNav} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="ChatBox" component={ChatBox}
                    options={({ route }) => ({
                        headerShown: true,
                        title: route.params.name,
                        headerStyle: { backgroundColor: '#efddbb' },
                        headerLeft: props => <UserImage userImage={route.params.userImage} />,
                        headerRight: () => <MaterialCommunityIcons name="video-box"
                            size={35} color="#2037A5" style={styles.videoIcon} />
                    })}
                />

            </Stack.Navigator>
        )

        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        )
    };

    return (
        <NavigationContainer>
            {loadScreens()}
        </NavigationContainer >
    );
}
