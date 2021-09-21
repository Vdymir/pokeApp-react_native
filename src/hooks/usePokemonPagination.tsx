import { useEffect, useRef, useState } from "react";
import { pokeApi } from "../api/pokemonApi";
import { OnePokemon, PokemonPaginateRespon, Result } from "../interface/interfacePokemon";

export const usePokemonPagination = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [simplePokemonList, setSimplePokemonList] = useState<OnePokemon[]>([])
    const nextUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

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
        setIsLoading(true)
        const resp = await pokeApi.get<PokemonPaginateRespon>(nextUrl.current)
        nextUrl.current = resp.data.next;
        getPokemon(resp.data.results);
        setIsLoading(false)
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    return {
        simplePokemonList,
        loadPokemons,
        isLoading
    }
}