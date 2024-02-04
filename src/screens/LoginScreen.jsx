import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useLogInMutation } from '../services/authService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { insertSession } from '../db'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [triggerLogIn, result] = useLogInMutation()

    const onSubmit = () => {
        triggerLogIn({email, password})
    }
    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.data){
            dispatch(setUser(result.data))
            insertSession({
              localId: result.data.localId,
              email: result.data.email,
              token: result.data.idToken
          })
          .then(result=>console.log("Éxito al guardar sesión: ", result))
          .catch(error=>console.log("Error al guardar sesión: ", error.message))
        }

    }, [result])

    return (
        <View style={styles.container}>
            <Input
                label="Email:"
                onChange={setEmail}
            />
            <Input
                label="Contraseña:"
                onChange={setPassword}
                isSecureEntry={true}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Ingresar</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}>
                    <Text style={styles.subtitleLink}>Crear una</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 10,
},
btn: {
    padding: 10,
    backgroundColor: colors.secondary,
    borderRadius: 8,
    margin: 5,

},
btnText: {
    fontFamily: "RobotoSlab-Bold"
},
altContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
},
subtitle: {
    color: "#fff",
    fontFamily: "RobotoSlab-Bold",
    fontSize: 15,
},
subtitleLink: {
    fontFamily: "RobotoSlab-Light",
    color: colors.tertiary,
    fontSize: 15,
    textDecorationLine: 'underline'
}
  })