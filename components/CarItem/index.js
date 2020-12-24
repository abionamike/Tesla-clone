import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import ModelX from '../../assets/images/ModelX.jpeg';
import StyledButton from '../styledButton';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <Image source={ModelX} style={styles.images} />
            <View style={styles.header}>
                <Text style={styles.title}>Model X</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <StyledButton type="primary" text="Custom Order" />
                <StyledButton type="secondary" text="Existing Inventory" />
            </View>
        </View>
    )
}

export default CarItem;
