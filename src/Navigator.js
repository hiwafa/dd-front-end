import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './screens/Login';
import Register from './screens/Register';
//import Chat from './screens/Chat';
import NavigateChat from './screens/NavigateChat'

const options = {
    headerShown:false
}

const Navigator = createStackNavigator(
{
    NavigateChat:{screen:NavigateChat},
    //Chat:{screen:Chat},
    Login:{screen:Login},
    Register:{screen:Register}

},
{
    defaultNavigationOptions : options
});

export default createAppContainer(Navigator);
