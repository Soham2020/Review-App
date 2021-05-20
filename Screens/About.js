import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../styles/Global';

export default function About () {
    return(
        <View style={GlobalStyles.container}>
            <Text>This is a game review app</Text>
        </View>
    )
};