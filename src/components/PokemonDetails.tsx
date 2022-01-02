import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '.'
import { InfoPokemon } from '../interface/interfacePokemon'


interface Props {
    pokemon: InfoPokemon;
    color: string;
}

const PokemonDetails = ({ pokemon, color }: Props) => {

    console.log(pokemon)

    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,

            }}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ ...styles.container, marginTop: 380 }}>
                {/* Type */}
                <View
                    style={{
                        backgroundColor: color,
                        padding: 10,
                        borderRadius: 10,
                        elevation: 3,
                    }}
                >
                    <Text style={styles.title}>
                        Types:
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            pokemon.types.map(({ type }) => (
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

                    <View style={{ height: 20 }}/>
                    {/* Habilidades */}

                    <Text style={styles.title}>
                        Abilities:
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            pokemon.abilities.map(({ ability }) => (
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
            </View>
        </ScrollView>
    )
}

export default PokemonDetails

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    regularText: {
        fontSize: 20,
        marginTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#ffffff'

    },
    pokeSprites: {
        height: 120,
        width: 100,
    }
})