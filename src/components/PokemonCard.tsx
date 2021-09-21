import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet, useWindowDimensions, Text, Image } from 'react-native'
import ImageColors from 'react-native-image-colors'

import { OnePokemon } from '../interface/interfacePokemon'
import { FadeInImage } from './FadeInImage'

interface Props {
    pokemon: OnePokemon;
}

const PokemonCard = ({ pokemon } :Props) => {

    const windowWidth = useWindowDimensions().width
    const [bgColor, setBgColor] = useState("gray")
    
    useEffect(() => {
       
        ImageColors.getColors(pokemon.imgUrl, {fallback: 'gray'})
            .then( result => {
             if(result.platform === 'android') {
                setBgColor(result.dominant || 'gray')
            } else if (result.platform === 'ios'){
                setBgColor(result.background || 'gray')
            }
        })
    }, [])
    
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            
        >
            {/* Card */}
            <View
                style={{
                    ...styles.cardContainer,
                    width: windowWidth * 0.4,
                    backgroundColor: bgColor,
                    
                }}
            >
                <View style={styles.pokebolaContainer}>
                    <Image 
                        source={ require('../assets/pokebola-blanca.png') }
                        style={styles.pokebola}
                    />
                </View>
                {/* imgPokemon */}
                <FadeInImage 
                    uri={pokemon.imgUrl}
                    style={styles.pokemonImg}
                />
                
                {/* namePokemon */}
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                    <View style={{backgroundColor: '#252525ce', padding: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
                        <Text style={styles.name}>
                            {pokemon.name}
                        </Text> 
                    </View> 
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default PokemonCard

const styles = StyleSheet.create({
    cardContainer: {
        height: 120,
        width: 150,
        backgroundColor: 'red',
        borderRadius: 10,
        marginHorizontal:10,
        marginBottom:28,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name:{
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    pokebolaContainer:{
        position: 'absolute',
        bottom: 0,
        right: 0,  
        overflow: 'hidden',
        zIndex: 2
    },
    pokebola:{
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.5,
        backgroundColor: 'red',
        
    },
    pokemonImg:{
        width: 120,
        height: 120,
        position: 'absolute',
        top: -20,
        right: 12,
        
    }
})