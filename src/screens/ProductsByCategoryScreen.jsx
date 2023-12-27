import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductsItem from '../components/ProductsItem'
import { useState, useEffect } from 'react'
import Search from '../components/Search'
import { useSelector } from 'react-redux'


const ProductsByCategoryScreen = ({ navigation, route}) => {
    const [ProductsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState('')

    const category = useSelector(state=>state.shopReducer.categorySelected)
    const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)

    useEffect(()=>{
        const productsFiltered = productsFilteredByCategory.filter(
            product=>product.title?.toLowerCase().includes(search?.toLowerCase()))
        setProductsByCategory(productsFiltered)
    },[category, search])

    const renderProductItem = ({ item }) => (
        <ProductsItem product={item} navigation={navigation}/>
    )

    const onSearch = (search) => {
        setSearch(search)
    }

    return (
        <>
            <Search onSearchHandlerEvent={onSearch}/>
            <FlatList
                data={ProductsByCategory}
                renderItem={renderProductItem}
                keyExtractor={item => item.id}
            />
        </>
    )
}

export default ProductsByCategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});