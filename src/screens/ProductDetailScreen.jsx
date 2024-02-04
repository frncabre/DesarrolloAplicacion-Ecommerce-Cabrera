import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../features/cartSlice'
import Carousel from '../components/Carousel' 

const ProductDetailScreen = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)

  const { height, width } = useWindowDimensions()

  const productId = route.params

  const productSelected = useSelector(state => state.shopReducer.productSelected)

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height])


  useEffect(() => {
    setIsLoading(false)
  }
    , [productId])

  const dispatch = useDispatch()

  const onAddToCart = () => {
    dispatch(addItem({ ...productSelected, quantity: 1 }))
  }

  return (
    <>
      {
        isLoading
          ?
          <ActivityIndicator />
          :
          <>
            <ScrollView >
              <Carousel />
              <View style={styles.detailContainer}>
                <Text style={styles.title}>{productSelected.title}</Text>
                <Text style={styles.description}>{productSelected.description}</Text>
                <Text style={styles.price}>$ {productSelected.price}</Text>
                <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={onAddToCart}>
                  <Text style={styles.buyText}>Agregar al carrito</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
      }

    </>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  detailContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 32,
  },
  description: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 16,
  },
  price: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 32,
    color: colors.tertiary
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.fourth,
    borderRadius: 10,
  },
  buyText: {
    color: '#fff'
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  }
})