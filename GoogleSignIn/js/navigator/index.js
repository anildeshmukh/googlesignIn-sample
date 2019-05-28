import {createStackNavigator,createAppContainer} from 'react-navigation';
import App from '../App'
import Welcome from '../dashboard/WelcomeScreen'

const AppStackNavigator = createStackNavigator({
  LandingScreen:{screen:App},
  WelcomeScreen:{screen:Welcome}
});

export default AppNavigator = createAppContainer(AppStackNavigator);
