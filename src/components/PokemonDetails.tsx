import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { InfoPokemon } from '../interface/interfacePokemon'
import appTheme from '../theme/appTheme'
import Gap from './Gap'


interface Props {
    pokemon: InfoPokemon;
    color: string;
}

const PokemonDetails = ({ pokemon, color }: Props) => {

    return (
        <View
            style={{
                ...styles.container,
                ...appTheme.shadow,
                backgroundColor: color,
            }}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 10 }}>
                    <Text
                        style={styles.title}
                    >
                        Abilities
                    </Text>
                    <View style={styles.wrapper}>
                        {
                            pokemon.abilities.map(({ability}) => (
                                <Text
                                    style={styles.wrapperText}
                                >
                                    {ability.name}
                                </Text>
                            ))
                        }
                    </View>
                    <Gap height={20}/>
                    <Text
                        style={styles.title}
                    >
                        Moves
                    </Text>
                    <ScrollView 
                        horizontal 
                        showsHorizontalScrollIndicator={false}  
                    >
                        {
                            pokemon.moves.map(({move}) => (
                                <Text
                                    style={styles.wrapperText}
                                >
                                    {move.name}
                                </Text>
                            ))
                        }
                    </ScrollView>
                    <Gap height={20}/>
                    <Text
                        style={styles.title}
                    >
                        Forms
                    </Text>
                    <View style={styles.wrapper}>
                        {
                            pokemon.forms.map(({name}) => (
                                <Text
                                    style={styles.wrapperText}
                                >
                                    {name}
                                </Text>
                            ))
                        }
                    </View>
                    <Gap height={20}/>
                    <Text
                        style={styles.title}
                    >
                        Types
                    </Text>
                    <View style={styles.wrapper}>
                        {
                            pokemon.types.map(({type}) => (
                                <Text
                                    style={styles.wrapperText}
                                >
                                    {type.name}
                                </Text>
                            ))
                        }
                    </View>
                    <Gap height={50}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default PokemonDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginTop: 10,
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#FFF',
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
    },
    wrapper: {
        flexDirection: 'row',
    },
    wrapperText: {
        backgroundColor: '#00000040',
        paddingVertical: 8,
        paddingHorizontal: 11,
        borderRadius: 10,
        marginRight: 5,
        marginTop: 3,
        color: '#FFF',
        fontSize: 20,
        textTransform: 'capitalize'
    }
})