import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';

const CartScreen = ({ navigation }) => {

  const cartItems = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total)
  const [triggerPost, result] = usePostOrderMutation()
  const localId = useSelector(state=>state.authReducer.localId)
  const createdAt = Date.now()

  const confirmCart = () => {
    triggerPost({total, cartItems, user: "LoggedUser", createdAt, localId, orderId: Math.ceil(Math.random(1,10)*1000)})

  }

  const renderCartItem = ({ item }) => (
    <CartItem item={item} />
  )

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: USD {total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: 'RobotoSlab-Bold'
  },
  confirmButton: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
  },
  textConfirm: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 16
  }
})