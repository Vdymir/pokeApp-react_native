import React from 'react'
import { Text, View } from 'react-native'

const PokemonScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                fontSize: 25
            }}>
                Pokemon Screen
            </Text>            
        </View>
    )
}

export default PokemonScreen