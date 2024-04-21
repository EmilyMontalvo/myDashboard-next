'use client'
import { useAppSelector } from '@/store'
import React, { useState } from 'react'
import PokemonGrid from './PokemonGrid'
import { IoHeartOutline } from 'react-icons/io5'

const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites))
    // El Object.values toma los valores del objeto porque no viene tipado como un "Simple pokemon" como tall
    // SI no como un Selector
    //const [pokemons, setpokemons] = useState(favoritePokemons);
    return (
        <>
            {
                favoritePokemons.length === 0
                    ? <NoFavorites />
                    : <PokemonGrid pokemons={favoritePokemons} />
            }
        </>
    )
}

export default FavoritePokemons

export const NoFavorites = () => {
    return (
        <div className='flex flex-col h-[50vh] items-center justify-center'>
            <IoHeartOutline size={100} className='text-red-500' />
            <span>No existen favoritos</span>
        </div>
    )
}
