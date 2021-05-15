import React from 'react';
import { View, Text, Button } from 'react-native';
import { GlobalStyles } from '../styles/Global';

export default function ReviewDetails ({ navigation }) {
    const pressHandler = () => {
        navigation.goBack()
    }
    return(
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.titleText}>Review details Screen</Text>
            <Button title='Go to home' onPress={pressHandler} />
        </View>
    )
};