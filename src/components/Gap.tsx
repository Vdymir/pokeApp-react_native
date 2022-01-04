import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    width?: number;
    height?: number;
}

const Gap = ({height, width}: Props) => {
    return (
        <View style={{
            width,
            height
        }}/>
    )
}

export default Gap

