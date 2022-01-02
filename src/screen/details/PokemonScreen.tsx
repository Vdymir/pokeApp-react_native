import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParams } from '../../navigation/StackNavigaton'
import appTheme from '../../theme/appTheme'
import { FadeInImage, PokemonDetails } from '../../components'
import { usePokemon } from '../../hooks'


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{}

const PokemonScreen = ({ route, navigation }: Props) => {
    
    const { OnePokemon, color } = route.params;
    const { id, imgUrl, name } = OnePokemon;

    const {isLoading, pokemon} = usePokemon(id)

    return (
        <View style={{flex: 1}}>
            {/* header Container */}
            <View style={{
                ...styled.headContainer,
                backgroundColor: color
            }}>
                {/* Go to back */}
                <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styled.gotoBack}
                    onPress={()=> navigation.goBack()}
                >
                    <Icon 
                        name="chevron-back-outline"
                        color='#ffffff'
                        size={35}
                    />
                </TouchableOpacity>

                {/** Name Pokemon */}
                <Text style={{
                    ...appTheme.title,
                    color: '#fff',
                    top: 20

                }}>
                    {name}
                </Text>

                {/** Pokebola */}
                <Image 
                    source={require('../../assets/pokebola-blanca.png')}
                    style={styled.pokebola}
                />

                {/**Pokemon */}
                <FadeInImage 
                    uri={imgUrl}
                    style={styled.pokemon}
                />
            </View>

            {/** Datails and loading */}
            
                { isLoading 
                    ?   (
                            <View style={{ flex: 1}}>
                                <ActivityIndicator 
                                    size={35}
                                    color='gray'
                                    style={{ marginTop: 20}}
                                />
                            </View>
                        )
                    :  <PokemonDetails pokemon={pokemon} color={color} />
                }
            
        </View>
    )
}

export default PokemonScreen

const styled = StyleSheet.create({
    headContainer: {
        height: 370,
        zIndex: 999,
        borderBottomStartRadius: 1000,
        borderBottomEndRadius: 1000,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },
    gotoBack:{
        position: 'absolute',
        top: 20,
        left: 20,
        borderWidth: 1,
        borderColor: '#ffffffc7',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokebola:{
        width: 250,
        height: 250,
        bottom: -60,
        opacity: 0.3,
    },
    pokemon:{
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: 10
    }
})