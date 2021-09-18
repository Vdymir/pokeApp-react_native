import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                fontSize: 25
            }}>
                Home Screen
            </Text>            
        </View>
    )
}

export default HomeScreen
