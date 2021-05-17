import { createStackNavigator } from 'react-navigation-stack';
import About from '../Screens/About';

const screens = {
    About: {
        screen: About
    }
}

const AboutStack = createStackNavigator(screens);

export default AboutStack;