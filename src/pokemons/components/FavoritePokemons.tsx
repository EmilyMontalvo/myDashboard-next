'use client'
import { useAppSelector } from '@/store'
import React from 'react'
import PokemonGrid from './PokemonGrid'

const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons))
    // El Object.values toma los valores del objeto porque no viene tipado como un "Simple pokemon" como tall
    // SI no como un Selector
  return (
    <div>
      <PokemonGrid pokemons={favoritePokemons} />
    </div>
  )
}

export default FavoritePokemons
