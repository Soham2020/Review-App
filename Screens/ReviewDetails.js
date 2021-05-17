import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../shared/Card';
import { GlobalStyles } from '../styles/Global';

export default function ReviewDetails ({ navigation }) {
    return(
        <View style={GlobalStyles.container}>
            <Card>
                <Text style={GlobalStyles.titleText}> { navigation.getParam('title') } </Text>
                <Text style={GlobalStyles.titleText}> { navigation.getParam('body') } </Text>
                <Text style={GlobalStyles.titleText}> { navigation.getParam('rating') } </Text>
            </Card>
        </View>
    )
};