import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import { useState } from 'react';
import Navigator from './src/navigation/Navigator';
=======
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsByCategoryScreen from './src/screens/ProductsByCategoryScreen';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import { useState } from 'react';

>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190

export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('')
<<<<<<< HEAD
  const [productIdSelected, setProductIdSelected] = useState(null)
=======
>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190

  if (!fontsLoaded) return (<ActivityIndicator />)

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

<<<<<<< HEAD
  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }

  return (
    <Navigator/>
=======
  return (
    <>{
      categorySelected
      ?
      <ProductsByCategoryScreen category={categorySelected}/>
      :
      <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
    }
    </>
>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190
  );
}

const styles = StyleSheet.create({

});
