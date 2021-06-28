import { StyleSheet } from 'react-native';


const localStyle = StyleSheet.create({
    profielImageView: {
        alignItems: 'center',
        marginTop: 150
    },
    profileImage: {
        width: 180,
        height: 180,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: 'rgba(48, 28, 136, 0.5)',
        marginBottom: 10
    },
    buttonContainer: {
        width: '85%',
        margin: 100,
        marginTop: 25
    },
    inputTextView: {
        width: '100%',
        height: 60,
        elevation: 2,
        shadowColor: '#eee',
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
        borderRadius: 2
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
    },
    topicsView: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topicsLable: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 5,
        marginRight: 5
    }
});

export default localStyle;
//module.exports = { localStyle };
