import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import styles from './styles'
import cars from './cars';
import CarItem from '../CarItem';

const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => (
                    <CarItem name={item.name} tagline={item.tagline} image={item.image} taglineCTA={item.taglineCTA} />
                )}
                snapToAlignment='start'
                decelerationRate='normal'
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>

    )
}

export default CarList;
