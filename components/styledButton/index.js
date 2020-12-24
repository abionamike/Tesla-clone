import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const StyledButton = ({ type, text }) => {
    const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6';
    const color = type === 'primary' ? '#ffffff' : '#171a20';
    return (
        <TouchableOpacity onPress={() => alert(text)} style={[styles.button, { backgroundColor }]}>
            <Text style={[styles.buttonText, { color }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default StyledButton;
