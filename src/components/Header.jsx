<<<<<<< HEAD
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../global/colors"
import { AntDesign, FontAwesome5  } from '@expo/vector-icons';


const Header = ({ title, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={navigation.goBack} style={styles.buttons}>
                    <AntDesign name="back" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigation.popToTop} style={styles.buttons}>
                <FontAwesome5 name="home" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.headerTitle}> {title} </Text>
        </View>
=======
import { View, Text, StyleSheet} from "react-native"
import { colors } from "../global/colors"

const Header = ({title}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.headerTitle}> {title} </Text>
        </View> 
>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 100,
<<<<<<< HEAD
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 30,
=======
        justifyContent: "space-evenly",
        alignItems: "center",
>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190
        backgroundColor: colors.primary
    },
    headerTitle: {
        fontFamily: 'RobotoSlab-Bold'
<<<<<<< HEAD
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttons: {
        paddingHorizontal: 20
=======
>>>>>>> cb62b1c6b5009486eb7d830c683b66911444f190
    }
});