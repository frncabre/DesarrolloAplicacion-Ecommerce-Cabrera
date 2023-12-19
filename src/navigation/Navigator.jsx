import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import CategoriesScreen from "../screens/CategoriesScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductsByCategoryScreen from "../screens/ProductsByCategoryScreen";

import { colors } from "../global/colors";
import Header from "../components/Header";

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Categorías"
                screenOptions={
                    ({navigation, route}) => ({
                        header: () => <Header title={route.name} navigation={navigation}/>
                    })
                }
            >
                <Stack.Screen
                    name="Categorias"
                    component={CategoriesScreen}
                    options={{
                        title: 'Categorías'
                    }}
                />
                <Stack.Screen
                    name="Productos"
                    component={ProductsByCategoryScreen}
                    options={{
                        title: 'Productos'
                    }}
                />
                <Stack.Screen
                    name="Detalle"
                    component={ProductDetailScreen}
                    options={{
                        title: 'Detalle del Producto'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator