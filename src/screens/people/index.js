import React, { useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { fetchPeople } from '../../store/actions/PeopleSlice';
import { getUser } from '../../store/actions/UserSlice';

export default () => {

    const dispatch = useDispatch();
    const user = useSelector(getUser);

    useEffect(()=>{

        (async ()=> {

            const {payload} = dispatch(fetchPeople(user.access_token));
            

        })();

    }, []);

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
