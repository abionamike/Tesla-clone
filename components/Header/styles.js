import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,   
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 100,
        paddingHorizontal: 20
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
});

export default styles;