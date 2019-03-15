import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../Components/home'
import Results from '../Components/results'
import Reco from '../Components/reco'
import Swipe from '../Components/tinder'

const MainNavigator = createStackNavigator(
  {
  Home: {screen: Home},
  Swipe: {screen: Swipe},
  Results: {screen: Results},
  Reco: {screen: Reco},
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#4fc1df',
      },
    },
  }
);

const App = createAppContainer(MainNavigator);

export default App;
