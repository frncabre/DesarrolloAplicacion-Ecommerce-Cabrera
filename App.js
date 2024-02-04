import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font'
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';
import { fonts } from './src/global/fonts';

export default function App() {

  init()
  .then(()=>console.log("Database initializated"))
  .catch((error)=>console.log("Initialize db failed: ", error))

  const [fontsLoaded] = useFonts(fonts)
  if (!fontsLoaded) return (<ActivityIndicator />)

  return (

    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}


