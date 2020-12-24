import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
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
        fontSize: 16,
        color: '#5c5e62',
    }, 
    taglineCTA: {
        textDecorationLine: 'underline'
    },
    images: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    },
});

export default styles;