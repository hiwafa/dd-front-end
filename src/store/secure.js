import * as SecureStore from 'expo-secure-store';

async function saveSecure(key, value) {
    try {
        console.log("saveSecure");
        await SecureStore.setItemAsync(key, JSON.stringify(value));
    } catch (err) {
        console.log("Err: ", err);
    }
}

async function getValueFor(key) {
    try {

        console.log("getValueFor");
        let result = await SecureStore.getItemAsync(key);
        if (result) return JSON.parse(result);
        return null;

    } catch (err) {
        console.log("Err: ", err);
        return null;
    }
}

module.exports = { saveSecure, getValueFor };