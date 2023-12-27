import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import { colors } from "../global/colors";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrdersNavigator from "./OrdersNavigator";


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar
                }}
            >
                <Tab.Screen
                    name="ShopStack"
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: () => (
                            <FontAwesome5 name="home" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="CartStack"
                    component={CartNavigator}
                    options={{
                        tabBarIcon: () => (
                            <FontAwesome5 name="shopping-cart" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="OrderStack"
                    component={OrdersNavigator}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons name="receipt-sharp" size={24} color="black" />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
        shadowColor: colors.shadow,
        elevation: 1,
        position: "absolute",
        left: 25,
        right: 25,
        bottom: 25,    
        height: 60,
        borderRadius: 15
    }
})