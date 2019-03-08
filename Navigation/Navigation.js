import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../Components/home'
import Results from '../Components/results'
import Reco from '../Components/reco'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Results: {screen: Results},
  Reco: {screen: Reco},
});

const App = createAppContainer(MainNavigator);

export default App;
