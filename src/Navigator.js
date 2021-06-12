import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './screens/Login';
import Register from './screens/Register';
import ChatRoomScreen from './screens/ChatRoomScreen';
import NavigateChat from './screens/NavigateChat'

const options = {
    headerShown:false
}

const Navigator = createStackNavigator(
{
    ChatRoomScreen:{screen:ChatRoomScreen},
    NavigateChat:{screen:NavigateChat},
    Login:{screen:Login},
    Register:{screen:Register}

},
{
    defaultNavigationOptions : options
});

export default createAppContainer(Navigator);
