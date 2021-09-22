import { useEffect, useState } from 'react'
import { pokeApi } from '../api/pokemonApi';
import { InfoPokemon } from '../interface/interfacePokemon';

const usePokemon = (id: string) => {
  
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<InfoPokemon>({} as InfoPokemon);


    const loadPokemon = async () => {
        const resp = await pokeApi.get<InfoPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon(resp.data);
        setIsLoading(false)
    }

    useEffect(() => {
       loadPokemon();
    }, [])

    return {
        isLoading,
        pokemon
    }
}

export default usePokemon
