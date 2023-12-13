import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
        <Header title="Categorias"/>
        <Text>Detalles del producto</Text>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    
});