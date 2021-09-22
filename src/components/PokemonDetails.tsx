import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '.'
import { InfoPokemon } from '../interface/interfacePokemon'


interface Props {
    pokemon: InfoPokemon;
}

const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
               
            }}
            showsVerticalScrollIndicator={false}
        >
            <View style={{...styles.container, marginTop: 360}}>
                <Text style={styles.title}>
                    Types 
                </Text>
                <View style={{flexDirection:'row'}}>
                    {
                        pokemon.types.map( ({type}) =>(
                            <Text
                                key={type.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
                <Text style={styles.title}>
                    Peso 
                </Text>
                <Text style={styles.regularText}>
                    {pokemon.weight}lb 
                </Text>
            </View>

            <View style={styles.container}> 
                <Text style={styles.title}>
                        Sprites 
                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop: -10}}
                >
                    <FadeInImage 
                        uri={pokemon.sprites.back_default}
                        style={styles.pokeSprites}
                    />
                    <FadeInImage 
                        uri={pokemon.sprites.front_default}
                        style={styles.pokeSprites}
                    />
                    <FadeInImage 
                        uri={pokemon.sprites.back_shiny}
                        style={styles.pokeSprites}
                    />
                    <FadeInImage 
                        uri={pokemon.sprites.front_shiny}
                        style={styles.pokeSprites}
                    />
                </ScrollView>
            </View>
            <View style={styles.container}> 
                <Text style={{...styles.title, marginTop: 0}}>
                       Habilidades
                </Text>
                <View style={{flexDirection:'row'}}>
                    {
                        pokemon.abilities.map( ({ability}) =>(
                            <Text
                                key={ability.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>
            </View>
            <View style={styles.container}> 
                <Text style={styles.title}>
                       Moves
                </Text>
                <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
                    {
                        pokemon.moves.map( ({move}) =>(
                            <Text
                                key={move.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>
            <View
                style={{height: 40}}
            />
        </ScrollView>
    )
}

export default PokemonDetails

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop:20
    },
    regularText:{
        fontSize: 22,
        marginTop: 5
    },
    pokeSprites:{
        height: 120,
        width: 100,
    }
})