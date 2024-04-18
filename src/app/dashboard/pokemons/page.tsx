import { PokemonsResponse, SimplePokemon } from '@/pokemons';
import React from 'react'
import PokemonGrid from '@/pokemons/components/PokemonGrid';


export const metadata = {
    title: '100 Pokemons',
    description: '100 Pokemons',
   };

const getPokemons = async (limit = 100, offset = 10): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        //Lo divido por / y tomo el segmneto que quiero (-2)
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))
    return pokemons;
}

const Pokemons = async () => {

    const pokemons = await getPokemons();

    return (
        <div className='flex flex-col'>
            <span className='text-3xl my-2 text-center'>Listado de Pokemons <small className='font-bold'>estático</small></span>
           <PokemonGrid pokemons={pokemons} />
        </div>
    )
}
export default Pokemons
