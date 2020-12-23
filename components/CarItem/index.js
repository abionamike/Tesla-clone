import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import ModelX from '../../assets/images/ModelX.jpeg'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <Image source={ModelX} style={styles.images} />
            <View style={styles.header}>
                <Text style={styles.title}>Model X</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
                    <Text style={styles.buttonText}>Custom Order</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
                    <Text style={styles.buttonText}>Existing Inventory</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CarItem;
