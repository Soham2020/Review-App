import { createStackNavigator } from 'react-navigation-stack';
import About from '../Screens/About';
import Header from '../shared/Header';
import React from 'react';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation, title }) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='About Gamezone' />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens);

export default AboutStack;