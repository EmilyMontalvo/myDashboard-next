import { PokemonsResponse, SimplePokemon } from '@/pokemons';
import React from 'react'
import PokemonGrid from '@/pokemons/components/PokemonGrid';
import { useAppSelector } from '@/store';
import FavoritePokemons from '@/pokemons/components/FavoritePokemons';
import { IoHeartOutline } from 'react-icons/io5';


export const metadata = {
    title: 'Favoritos',
    description: '100 Pokemons',
   };

const PokemonsFavoritos = async () => {

    return (
        <div className='flex flex-col'>
            <span className='text-3xl my-2 text-center'>Pokemons Favoritos <small className='font-bold'>Global State</small></span>
            <FavoritePokemons/> 
           
        </div>
    )
}
export default PokemonsFavoritos

