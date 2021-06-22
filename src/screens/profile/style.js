import { StyleSheet } from 'react-native';


const localStyle = StyleSheet.create({
    profielImageView: {
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
        width: '85%',
        margin: 100
    },
    inputTextView: {
        width: '100%',
        height: 80,
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
    }
});


module.exports = { localStyle };