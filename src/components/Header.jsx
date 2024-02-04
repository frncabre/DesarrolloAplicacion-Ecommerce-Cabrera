import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';
import { deleteSession } from '../db';

const Header = ({ title, navigation }) => {

    const email = useSelector(state => state.authReducer.user)
    const localId = useSelector(state => state.authReducer.localId)
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
        const deletedSession = deleteSession(localId)
    }

    return (
        <View style={styles.headerContainer}>
            {
                navigation.canGoBack()
                    ?
                    <TouchableOpacity onPress={navigation.goBack} style={styles.buttons}>
                        <Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
                    </TouchableOpacity>
                    : null
            }
            <TouchableOpacity onPress={navigation.popToTop} style={styles.buttons}>
                <FontAwesome5 name="home" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
            {
                email
                &&
                <TouchableOpacity onPress={onLogout}>
                    <MaterialCommunityIcons name="logout" size={24} color="black" />
                </TouchableOpacity>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        fontFamily: 'RobotoSlab-Bold',
        fontSize: 20,
    }
})