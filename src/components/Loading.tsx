import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

const Loading = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator 
                size={50}
                color="gray"
            />
            <Text>Cargando...</Text>
        </View>
    )
}

export default Loading
