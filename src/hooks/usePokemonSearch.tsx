import { useEffect, useState } from "react";
import { pokeApi } from "../api/pokemonApi";
import { OnePokemon, PokemonPaginateRespon, Result } from "../interface/interfacePokemon";

export const usePokemonSearch = () => {

    const [isFetching, setIsFetching] = useState(false)
    const [simplePokemonList, setSimplePokemonList] = useState<OnePokemon[]>([])
    

    const getPokemon = (pokemon:Result[]) => {
        const newPoke: OnePokemon[] =pokemon.map( poke => {
            const urlPath = poke.url.split('/');
            const id = urlPath[urlPath.length - 2]
            const imgUrl= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            
            return {
                id,
                name: poke.name,
                imgUrl
            }
        });

        setSimplePokemonList([...simplePokemonList, ...newPoke])
    }

    const loadPokemons = async() =>{
        setIsFetching(true)
        const resp = await pokeApi.get<PokemonPaginateRespon>('https://pokeapi.co/api/v2/pokemon?limit=1200')
        getPokemon(resp.data.results);
        setIsFetching(false)
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    return {
        simplePokemonList,
        isFetching
    }
}