import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { PokemonCard } from '../components'
import { usePokemonPagination } from '../hooks'
import appTheme from '../theme/appTheme'

const HomeScreen = () => {
    
    const { top } = useSafeAreaInsets();

    const {simplePokemonList, isLoading, loadPokemons} = usePokemonPagination();
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
                    ListHeaderComponent={() => (
                        <Text style={{
                            ...appTheme.title,
                            ...appTheme.globalMargin,
                            marginTop: top + 25,
                            paddingBottom: 50,
                            color:"black"
                        }}>
                            PokeApp
                        </Text>
                    )}
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
