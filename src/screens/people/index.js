import React, { useEffect, useReducer } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { fetchPeople } from '../../store/actions/PeopleSlice';
import { getUser } from '../../store/actions/UserSlice';
import { Avatar, ListItem } from 'react-native-elements';
import { placeHolderImage } from '../../constants';

export default () => {

    const [people, setPeople] = useReducer((_, v) => v, []);

    const dispatch = useDispatch();
    const user = useSelector(getUser);

    useEffect(() => {
        (async () => {
            try {

                const { payload } = await dispatch(fetchPeople(user.access_token));
                if (payload && Array.isArray(payload)) setPeople(payload);

            } catch (err) {
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{
                width: '100%', height: 80, elevation: 2
            }}>

            </View>
            <FlatList
                data={people}
                keyExtractor={(item) => `@${item.id}`}
                renderItem={({ item }) => {

                    // rofile_picture_url
                    // first_name
                    // last_name

                    return (
                        <ListItem>

                            <Avatar
                                size='medium'
                                rounded
                                title={`${item.first_name[0]}${item.last_name[0]}`}
                                source={
                                    item.rofile_picture_url ?
                                    { uri: item.rofile_picture_url } :
                                    placeHolderImage
                                }
                            />

                            <ListItem.Content>
                                <ListItem.Title>{item.first_name}</ListItem.Title>
                                <ListItem.Title>{item.last_name}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />

                        </ListItem>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
