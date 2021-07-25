import React, { useEffect, useReducer } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { fetchPeople } from '../../store/actions/PeopleSlice';
import { getUser } from '../../store/actions/UserSlice';

export default () => {

    const [people, setPeople] = useReducer((_, v)=> v, []);

    const dispatch = useDispatch();
    const user = useSelector(getUser);

    useEffect(() => {

        (async () => {
            try {

                const { payload } = await dispatch(fetchPeople(user.access_token));
                if(payload && Array.isArray(payload)) setPeople(payload);

            } catch (err) {

            }
        })();

    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={people}
                keyExtractor={(item) => `@${item.id}`}
                renderItem={({ item }) => {

                    return (
                        <Text>{item.email}</Text>
                    );
                }}
            />
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
