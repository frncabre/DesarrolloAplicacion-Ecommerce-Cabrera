import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import products_data from '../data/products_data.json'
import ProductsItem from '../components/ProductsItem'
import { useState, useEffect } from 'react'
import Search from '../components/Search'


const ProductsByCategoryScreen = ({category}) => {
    const [ProductsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        const productsFilteredByCategory = products_data.filter(product=>product.category===category)
        const productsFiltered = productsFilteredByCategory.filter(
            product=>product.title?.toLowerCase().includes(search?.toLowerCase()))
        setProductsByCategory(productsFiltered)
    },[category, search])

    const renderProductItem = ({ item }) => (
        <ProductsItem product={item} />
    )

    const onSearch = (search) => {
        setSearch(search)
    }

    return (
        <>
            <Header title='Productos' />
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