import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setProductIdSelected } from '../features/shopSlice'

const ProductsItem = ({ product, navigation }) => {

    const dispatch = useDispatch()

    return (
        <Card style={styles.cardContainer}>
            <TouchableOpacity onPress={() => {
                dispatch(setProductIdSelected(product.id))
                navigation.navigate('Detalle', product.id)
            }
            } style={styles.containerProductItem}>
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