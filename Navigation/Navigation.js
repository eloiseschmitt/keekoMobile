import {createStackNavigator, createAppContainer} from 'react-navigation';
import Results from '../Components/results'
import Reco from '../Components/reco'

const MainNavigator = createStackNavigator({
  Results: {screen: Results},
  Reco: {screen: Reco},
});

const App = createAppContainer(MainNavigator);

export default App;
