import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { OnePokemon } from "../interface/interfacePokemon";
import HomeScreen from "../screen/home";
import PokemonScreen from "../screen/details";

export type RootStackParams = {
    HomeScreen: undefined,
    PokemonScreen: {OnePokemon: OnePokemon, color: string}
}

const Stack = createStackNavigator<RootStackParams>();

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
            <Stack.Screen name="PokemonScreen" component={PokemonScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigation;