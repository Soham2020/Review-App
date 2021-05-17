import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home';
import ReviewDetails from '../Screens/ReviewDetails';
import React from 'react';
import Header from '../shared/Header';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation, title }) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='GameZone' />
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Reviews',
            headerTintColor: '#444'
        }
    }
}

const HomeStack = createStackNavigator(screens);
export default HomeStack;