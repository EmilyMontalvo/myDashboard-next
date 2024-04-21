import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsFavState {
  favorites: {[key: string]: SimplePokemon}
  // Voy a tener x cantidad de llaves, pero esas llaves van a ser strings
  // Cada una de esas llaves apuntan a un valor de tipo SimplePokemon
}

// //! Esto si es permitido
// const getInitialState = (): PokemonsFavState => { //Aquí extraigo del local storage
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
//   return favorites
// }

const initialState: PokemonsFavState = {
  favorites:{}
  // ...getInitialState(),
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>)
    {
      state.favorites = action.payload
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload
      const { id } = pokemon;

      //Cuando lo quito de favoritos
      if (!!state.favorites[id]) {
        delete state.favorites[id]
         return;
      } else {
        state.favorites[id] = pokemon;
      }
      //! Lo que se va a hacer es una mala práctica pero es por uso educativo sobre el local storage
      //!Esto no se debe de hacer en redux
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer