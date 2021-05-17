import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Navigator from './Routes/drawer';

export default function App() {
    return (
      <>
        <View>
          <StatusBar style="dark" />
        </View>
        <Navigator />
      </>
    );
}
