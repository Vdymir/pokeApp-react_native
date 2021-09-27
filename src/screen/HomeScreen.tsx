import React from 'react'
import { ActivityIndicator, FlatList, Image, View } from 'react-native'

import { PokemonCard } from '../components'
import { usePokemonPagination } from '../hooks'
import appTheme from '../theme/appTheme'


const HomeScreen = () => {

    const {simplePokemonList, isLoading, loadPokemons} = usePokemonPagination();

    const headerTitle = () => {
        return(
            <View style={{
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10
            }}>
                <Image 
                    source={ require('../assets/logo.png')}
                    style={{
                        width: '100%',
                        height: 150
                    }}
                />
            </View>
        )
    }
    return (
        <>
            <Image 
                source={ require('../assets/pokebola.png')}
                style={{ ...appTheme.pokebolaBG}}
            />
            <View style={{alignItems: 'center'}}>
                <FlatList
                    data={simplePokemonList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    //Title:
                    ListHeaderComponent={ headerTitle }
                    // Componente a mostrar
                    renderItem={ ({item}) => (
                        <PokemonCard pokemon={item}/>
                    )}
                    //Numero de columnas
                    numColumns={2}
                    //infinte scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.5}
                    //Footer:
                    ListFooterComponent={()=>(
                        <ActivityIndicator 
                            style={{ height: 100 }}
                            size={20}
                            color="gray"
                        />
                    )}
                />
            </View>
            {/* */}           
        </>
    )
}

export default HomeScreen
