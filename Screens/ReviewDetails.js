import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from '../shared/Card';
import { GlobalStyles, images } from '../styles/Global';

export default function ReviewDetails ({ navigation }) {
    const rating = navigation.getParam('rating');
    return(
        <View style={GlobalStyles.container}>
            <Card>
                <Text style={GlobalStyles.titleText}> { navigation.getParam('title') } </Text>
                <Text style={GlobalStyles.titleText}> { navigation.getParam('body') } </Text>
                <View style={styles.rating}>
                    <Text style={GlobalStyles.titleText}>Rating:</Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})