import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Card from './Card'

<<<<<<< HEAD
const ProductsItem = ({ product, navigation }) => {
    return (
        <Card style={styles.cardContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Detalle', product.id)} style={styles.containerProductItem}>
=======
const ProductsItem = ({ product }) => {
    return (
        <Card style={styles.cardContainer}>
            <TouchableOpacity style={styles.containerProductItem}>
>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190
                <Text style={styles.productTitle}>{product.title}</Text>
                <Image
                    style={styles.productImage}
                    resizeMode='cover'
                    source={{ uri: product.thumbnail }}
                />
            </TouchableOpacity>
        </Card>
    )
}

export default ProductsItem

const styles = StyleSheet.create({
    containerProductItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10
    },
    productImage: {
        width: 60,
        height: 60
    },
    cardContainer: {
        padding: 10,
        margin: 10
    },
})