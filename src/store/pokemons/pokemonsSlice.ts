import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsFavState {
  [key: string]: SimplePokemon
  //! Voy a tener x cantidad de llaves, pero esas llaves van a ser strings
  //! Cada una de esas llaves apuntan a un valor de tipo SimplePokemon
}
const initialState: PokemonsFavState = {
  '1': { id: '1', name: 'bulbasaur' },
  '5': { id: '5', name: 'bulbasaur' }
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
        return;
      }
      state[id] = pokemon;
    }
  }
});

export const { toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer