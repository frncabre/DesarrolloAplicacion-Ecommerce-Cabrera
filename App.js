import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import { useState } from 'react';
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  if (!fontsLoaded) return (<ActivityIndicator />)

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
