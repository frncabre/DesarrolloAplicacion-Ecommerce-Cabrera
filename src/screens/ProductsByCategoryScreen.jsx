import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import products_data from '../data/products_data.json'
import ProductsItem from '../components/ProductsItem'
import { useState, useEffect } from 'react'
import Search from '../components/Search'
<<<<<<< HEAD
import { colors } from '../global/colors'


const ProductsByCategoryScreen = ({ navigation, route}) => {
    const [ProductsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState('')

    const {category} = route.params

=======


const ProductsByCategoryScreen = ({category}) => {
    const [ProductsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState('')

>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190
    useEffect(()=>{
        const productsFilteredByCategory = products_data.filter(product=>product.category===category)
        const productsFiltered = productsFilteredByCategory.filter(
            product=>product.title?.toLowerCase().includes(search?.toLowerCase()))
        setProductsByCategory(productsFiltered)
    },[category, search])

    const renderProductItem = ({ item }) => (
<<<<<<< HEAD
        <ProductsItem product={item} navigation={navigation}/>
=======
        <ProductsItem product={item} />
>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190
    )

    const onSearch = (search) => {
        setSearch(search)
    }

    return (
        <>
<<<<<<< HEAD
            {/* <Header title='Productos' /> */}
=======
            <Header title='Productos' />
>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190
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