import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './screens/Login';
import Register from './screens/Register';

const options = {
    headerShown:false
}

const Navigator = createStackNavigator(
{
    Login:{screen:Login},
    Register:{screen:Register},
},
{
    defaultNavigationOptions : options
});

export default createAppContainer(Navigator);