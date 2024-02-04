import { FlatList, Modal, StyleSheet, View, Text, Pressable } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons';
import CartItemOrder from '../components/CartItemOrder'
import { colors } from '../global/colors'

const OrdersScreen = () => {
  const localId = useSelector(state => state.authReducer.localId)
  const { data, isLoading } = useGetOrdersQuery(localId)
  const [orderData, setOrderData] = useState([])
  const [orderIdSelected, setOrderIdSelected] = useState("")
  const [orderSelected, setOrderSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (data) {
      const orderData = Object.values(data)
      setOrderData(orderData)
    }
  }, [data, isLoading])

  useEffect(() => {
    const orderSelected = orderData.find(order => order.orderId === orderIdSelected)
    setOrderSelected(orderSelected)
  }, [orderIdSelected])

  const renderOrderItem = ({ item }) => {
    return (
      <OrderItem order={item} setOrderId={setOrderIdSelected} setModalVisible={setModalVisible} />
    )
  }

  const renderCartItemOrder = ({ item }) => (
    <CartItemOrder item={item} />
  )

  return (
    <>
      <FlatList
        data={orderData}
        renderItem={renderOrderItem}
      />
      <Modal visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={orderSelected?.cartItems}
              renderItem={renderCartItemOrder}
            />
            <Text style={styles.modalText}>Total: ${orderSelected?.total}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(false)
              }
              }>
              <FontAwesome name="window-close" size={25}  />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: colors.secondary,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 24
  },
});