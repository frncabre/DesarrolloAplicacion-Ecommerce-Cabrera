import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({ category, navigation }) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Productos', {category})}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        margin: 10
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 16
    }
})