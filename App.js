import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import { useState } from 'react';
import Navigator from './src/navigation/Navigator';

export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)

  if (!fontsLoaded) return (<ActivityIndicator />)

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }

  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({

});
