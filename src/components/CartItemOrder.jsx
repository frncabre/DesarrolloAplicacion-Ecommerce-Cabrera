import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'



const CartItemOrder = ({ item }) => {
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
        </Card>
    )
}

export default CartItemOrder

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginBottom: 15,
        marginTop: 10,
        borderRadius: 15
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
        fontSize: 20,
    },
    cartLightText: {
        fontFamily: 'RobotoSlab-Light',
        textTransform: 'capitalize',
        fontSize: 15,
    }, cartTotalPrice: {
        fontFamily: 'RobotoSlab-Bold',
        textTransform: 'capitalize',
        fontSize: 16,
        color: colors.fifth,
    }
})