import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from "../screen";

const Stack = createStackNavigator();
const screenOptions = {
    headerShown: false,
    cardStyle: {
    backgroundColor: "#FFF"
    }
}

const StackNavigation = () => {

    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        </Stack.Navigator>
    )
}