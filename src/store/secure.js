import * as SecureStore from 'expo-secure-store';

async function saveSecure(key, value) {
    try {
        await SecureStore.setItemAsync(key, JSON.stringify(value));
    } catch (err) {
        console.log("Err:secure.js:saveSecure ", err);
    }
}

async function getValueFor(key) {
    try {

        let result = await SecureStore.getItemAsync(key);
        if (result) return JSON.parse(result);
        return null;

    } catch (err) {

        console.log("Err:secure.js:getValueFor ", err);
        return null;
    }
}

module.exports = { saveSecure, getValueFor };