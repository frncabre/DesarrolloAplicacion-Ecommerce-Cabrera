import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

const CategoriesScreen = ({onSelectCategoryEvent}) => {
    const renderCategoryItem = ({item}) => (
        <CategoryItem onSelectCategoryEvent={onSelectCategoryEvent} category={item}/>
    )

    return (
        <>
            <Header title="Categorias" />
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