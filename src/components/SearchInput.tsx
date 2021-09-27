import React, { useEffect, useState } from 'react'
import {  
    StyleSheet, 
    View, 
    TextInput, 
    StyleProp,
    ViewStyle} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { useDebouncedValue} from '../hooks'

interface Props {
    style?: StyleProp<ViewStyle>
    onDebounce: (value:string) => void
}

const SearchInput = ({ style, onDebounce }: Props) => {

    const [inputValue, setInputValue] = useState('');
    const debouncedValue  = useDebouncedValue(inputValue);

    useEffect(() => {
        onDebounce(debouncedValue)
    }, [debouncedValue])

    
    return (
        <View style={{
            ...style as any
        }}>
            <View style={styles.inputBackground}>
                <TextInput 
                    placeholder="Buscar Pokemon"
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect= {false}
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <Icon 
                    name='search-outline'
                    size={25}
                    color='#464646'
                />
            </View>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    inputBackground:{
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        height: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    },
    input:{
        flex: 1,
        fontSize: 20
    }
})