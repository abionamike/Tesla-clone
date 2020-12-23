import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
    },
    header: {
        alignItems: 'center',
        marginTop: '30%',
        width: '100%',
    },
    title: {
        fontSize: 40,
        color: '#393c41',
        fontWeight: '500'
    },
    subtitle: {
        fontSize: 20,
        color: '#5c5e62',
        minHeight: 27
    }, 
    images: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonsContainer: {
        marginTop: '100%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgba(23,26,32,.8)',
        borderRadius: 25,
        margin: 5,
        paddingVertical: 5,
        zIndex: 1000
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase'
    },
});

export default styles;