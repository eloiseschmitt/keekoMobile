import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../Components/home'
import Results from '../Components/results'
import Reco from '../Components/reco'
import Swipe from '../Components/tinder'
import Mentions from '../Components/mentions'

const MainNavigator = createStackNavigator(
  {
  Home: {screen: Home},
  Swipe: {screen: Swipe},
  Results: {screen: Results},
  Reco: {screen: Reco},
  Mentions: {screen: Mentions}
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#4fc1df',
      },
      headerBackTitle: 'Retour'
    },
  }
);

const App = createAppContainer(MainNavigator);

export default App;
