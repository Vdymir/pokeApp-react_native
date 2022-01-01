import React, { useEffect, useState } from 'react'
import { View, Platform, FlatList, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Loading, PokemonCard, SearchInput } from '../../components';
import { usePokemonSearch } from '../../hooks';
import { OnePokemon } from '../../interface/interfacePokemon';
import appTheme from '../../theme/appTheme';


const SearchScreen = () => {
    
    const { top } = useSafeAreaInsets();
    const {isFetching, simplePokemonList} = usePokemonSearch();
    const [newPokeList, setNewPokeList] = useState<OnePokemon[]>([])
    const [term, setTerm] = useState('')

    useEffect(() => {
        
        if(term.length === 0) return setNewPokeList([])

        if(isNaN(Number(term))) {
            setNewPokeList(
                simplePokemonList.filter(
                    poke => poke.name.toLowerCase()
                    .includes(term.toLowerCase()) )
            )
        } else {
            const filterById = simplePokemonList.find(poke => poke.id === term);
            setNewPokeList(
                (filterById) ? [filterById] : []
            )
        }

    }, [term])

    if(isFetching) {
        return <Loading />
    }


    return (
        <View style={{
            flex:1,
            marginTop: (Platform.OS === 'ios') ? top : top +10,
            marginHorizontal: 20,
        }}>
            <SearchInput 
                onDebounce={ (value) => setTerm(value) }
            />
            <FlatList
                    data={newPokeList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    //Title:
                    ListHeaderComponent={() => (
                        <Text
                            style={{
                                ...appTheme.title,
                                ...appTheme.globalMargin,
                                paddingBottom: 18,
                                marginVertical: 15
                            }}
                        >{ term }</Text>
                    )}
                    // Componente a mostrar
                    renderItem={ ({item}) => (
                        <PokemonCard pokemon={item}/>
                    )}
                    //Numero de columnas
                    numColumns={2}
                />
        </View>
    )
}

export default SearchScreen
