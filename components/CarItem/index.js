import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import StyledButton from '../styledButton';

const CarItem = ({ name, tagline, taglineCTA, image }) => {
    return (
        <View style={styles.carContainer}>
            <Image source={image} style={styles.images} />
            <View style={styles.header}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text></Text>
            </View>
            <View style={styles.buttonsContainer}>
                <StyledButton type="primary" text="Custom Order" />
                <StyledButton type="secondary" text="Existing Inventory" />
            </View>
        </View>
    )
}

export default CarItem;
