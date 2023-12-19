import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

<<<<<<< HEAD
const CategoriesScreen = ({navigation}) => {
    const renderCategoryItem = ({item}) => (
        <CategoryItem navigation={navigation} category={item}/>
=======
const CategoriesScreen = ({onSelectCategoryEvent}) => {
    const renderCategoryItem = ({item}) => (
        <CategoryItem onSelectCategoryEvent={onSelectCategoryEvent} category={item}/>
>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190
    )

    return (
        <>
<<<<<<< HEAD
            {/* <Header title="Categorias" /> */}
=======
            <Header title="Categorias" />
>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190
            <FlatList 
                data={categories_data}
                renderItem={renderCategoryItem}
                keyExtractor={item=>item}
            />
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        
    },
});