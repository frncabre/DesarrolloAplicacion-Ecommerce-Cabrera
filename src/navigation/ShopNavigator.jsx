import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";

//Importamos las vistas
import CategoriesScreen from '../screens/CategoriesScreen'
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return(
            <Stack.Navigator
                initialRouteName="Categorías"
                screenOptions={
                    ({navigation, route}) => ({
                        header: () => <Header title={route.name} navigation={navigation} />
                    })
                }
            
            >
                <Stack.Screen 
                    name="Categorías"
                    component={CategoriesScreen}
                    options={{
                        title: 'Categorías'
                    }}
                />
                <Stack.Screen 
                    name="Productos"
                    component={ProductsByCategoryScreen}
                    options={{ title: 'Productos'}}
                />
                <Stack.Screen 
                    name="Detalle"
                    component={ProductDetailScreen}
                    options={{
                        title: 'Detalle del Producto'
                    }}
                />
            </Stack.Navigator>
    )
}


export default ShopNavigator

