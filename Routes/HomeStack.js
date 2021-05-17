import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home';
import ReviewDetails from '../Screens/ReviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Game Zone'
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

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'orange',
            height: 100,
        },
    }
});
export default HomeStack;