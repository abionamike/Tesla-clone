import React, { useState } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import styles from './styles'
import CarItem from '../CarItem';
import ModelX from '../../assets/images/ModelX.jpeg';
import ModelY from '../../assets/images/ModelY.jpeg';
import ModelS from '../../assets/images/ModelS.jpeg';
import Model3 from '../../assets/images/Model3.jpeg';

const CarList = () => {
    const [cars, setCars] = useState([{
        id: 1,
        name: 'Model S',
        tagline: 'Starting at $69,420',
        image: ModelX,
    }, {
        id: 2,
        name: 'Model 3',
        tagline: 'Order Online for',
        taglineCTA: 'Touchless Delivery',
        image: ModelY,
    }, {
        id: 3,
        name: 'Model X',
        tagline: 'Order Online for',
        taglineCTA: 'Touchless Delivery',
        image: ModelS,
    }, {
        id: 4,
        name: 'Model Y',
        tagline: 'Order Online for',
        taglineCTA: 'Touchless Delivery',
        image: Model3,
    }]);
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
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
