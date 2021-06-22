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
        height: 60,
        elevation: 2,
        shadowColor: '#ddd',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    inputLable: {
        fontSize: 18,
        marginLeft: 10,
        marginRight: 3,
    },
    inputText: {
        flex: 1,
        height: 50,
        marginRight: 10
    },
    inputClearIcon: {

        color: "#000",
        fontSize: 10,
        fontWeight: 'bold',
        left: .5,
        bottom: .5
    },
    inputClearIconView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        width: 16,
        height: 16,
        borderRadius: 8,
        marginRight: 10,
    }
});


module.exports = { localStyle };