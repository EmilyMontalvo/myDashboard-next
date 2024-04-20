import { PokemonsResponse, SimplePokemon } from '@/pokemons';
import React from 'react'
import PokemonGrid from '@/pokemons/components/PokemonGrid';


export const metadata = {
    title: 'Favoritos',
    description: '100 Pokemons',
   };

const PokemonsFavoritos = async () => {

    return (
        <div className='flex flex-col'>
            <span className='text-3xl my-2 text-center'>Pokemons Favoritos <small className='font-bold'>Global State</small></span>
           <PokemonGrid pokemons={[]} />
        </div>
    )
}
export default PokemonsFavoritos
