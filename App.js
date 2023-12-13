import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import { useState } from 'react';


export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('')

  if (!fontsLoaded) return (<ActivityIndicator />)

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  return (
    <>{
      categorySelected
      ?
      <ProductsByCategoryScreen category={categorySelected}/>
      :
      <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
    }
    </>
  );
}

const styles = StyleSheet.create({

});
