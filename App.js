import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Home from './Screens/Home';

export default function App() {
    return (
      <View>
        <Home />
        <StatusBar style="dark" />
      </View>
    );
}
