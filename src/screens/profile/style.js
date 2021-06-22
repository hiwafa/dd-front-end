import { StyleSheet } from 'react-native';


const localStyle = StyleSheet.create({
    profielImageView: {
        marginTop: 100,
        alignItems: 'center'
    },
    profileImage: {
        width: 180,
        height: 180,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: 'lightblue',
        marginBottom: 10
    },
    buttonContainer: {
        // flex: 1,
        margin: 100
    }
});


module.exports = { localStyle };