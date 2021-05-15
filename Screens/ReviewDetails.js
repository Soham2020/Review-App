import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../styles/Global';

export default function ReviewDetails ({ navigation }) {
    return(
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.titleText}> { navigation.getParam('title') } </Text>
            <Text style={GlobalStyles.titleText}> { navigation.getParam('rating') } </Text>
            <Text style={GlobalStyles.titleText}> { navigation.getParam('body') } </Text>
        </View>
    )
};