import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './AboutStack';
import HomeStack from './HomeStack';

const screens = {
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    }
}

const RootDrawer = createDrawerNavigator(screens);

export default createAppContainer(RootDrawer);