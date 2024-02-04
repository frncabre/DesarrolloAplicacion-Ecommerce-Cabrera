import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { removeItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';



const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    const habndleRemoveItem = () => {
        dispatch(removeItem(item.id))
    }

    return (
        <Card style={styles.cartItemContainer}>
            <Image
                style={styles.imageCartItem}
                resizeMode='cover'
                source={{ uri: item.thumbnail }}
            />
            <View >
                <Text style={styles.cartTitle}>{item.title}</Text>
                <Text style={styles.cartLightText}>{item.brand}</Text>
                <Text style={styles.cartLightText}>${item.price} c/u</Text>
                <Text style={styles.cartTotalPrice}>
                    Cantidad: {item.quantity}, Total: ${item.price * item.quantity}
                </Text>
            </View>
            <TouchableOpacity style={styles.trashCart} onPress={habndleRemoveItem}>
                <MaterialCommunityIcons name="delete-sweep" size={30} color="black" />
            </TouchableOpacity>
        </Card>
    )
}

export default CartItem

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginBottom: 15,
        marginTop: 10
    },
    cartContenContainer: {
        flexDirection: 'row',
    },
    imageCartItem: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    trashCart: {
        marginLeft: 'auto',
    },
    cartTitle: {
        fontFamily: 'RobotoSlab-Bold',
        textTransform: 'capitalize',
        fontSize: 20
    },
    cartLightText: {
        fontFamily: 'RobotoSlab-Light',
        textTransform: 'capitalize',
        fontSize: 15,
    }, cartTotalPrice: {
        fontFamily: 'RobotoSlab-Bold',
        textTransform: 'capitalize',
        fontSize: 16,
        color: colors.tertiary,
    }
})