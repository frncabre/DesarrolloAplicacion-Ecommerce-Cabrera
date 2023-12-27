import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'

const CategoriesScreen = ({navigation}) => {

    const categories = useSelector(state=>state.shopReducer.categories)

    const renderCategoryItem = ({item}) => (
        <CategoryItem navigation={navigation} category={item}/>
    )

    return (
        <>
            <FlatList 
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={item=>item}
                style={styles.categories}
            />
        </>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categories: {
        marginBottom: 85
    }
});