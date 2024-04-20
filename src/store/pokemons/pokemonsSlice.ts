import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsFavState {
  [key: string]: SimplePokemon
  // Voy a tener x cantidad de llaves, pero esas llaves van a ser strings
  // Cada una de esas llaves apuntan a un valor de tipo SimplePokemon
}

//! Esto si es permitido
const getInitialState = (): PokemonsFavState => { //Aquí extraigo del local storage
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
  return favorites
}

const initialState: PokemonsFavState = {
  ...getInitialState(),
  // '1': { id: '1', name: 'bulbasaur' },
  // '5': { id: '5', name: 'bulbasaur' }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload
      const { id } = pokemon;

      //Cuando lo quito de favoritos
      if (!!state[id]) {
        delete state[id]
        // return;
      } else {
        state[id] = pokemon;
      }
      //! Lo que se va a hacer es una mala práctica pero es por uso educativo sobre el local storage
      //!Esto no se debe de hacer en redux
      localStorage.setItem('favorite-pokemons', JSON.stringify(state))

    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer