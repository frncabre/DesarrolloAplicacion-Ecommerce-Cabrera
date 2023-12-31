import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../global/colors"
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';


const Header = ({ title, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
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
            </View>
            <Text style={styles.headerTitle}> {title} </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 30,
        backgroundColor: colors.primary
    },
    headerTitle: {
        fontFamily: 'RobotoSlab-Bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttons: {
        paddingHorizontal: 20
    }
});