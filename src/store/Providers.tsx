'use client';
import React from 'react'
import { store } from "./";
import { Provider } from 'react-redux'
import { setFavoritePokemons } from './pokemons/pokemonsSlice';
import { useEffect } from 'react';

interface Props {
    children: React.ReactNode
}

const Providers = ({children}:Props) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
    store.dispatch(setFavoritePokemons(favorites))
  }, [])


  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Providers
