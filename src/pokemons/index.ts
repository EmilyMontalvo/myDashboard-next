import { Pokemon } from './interfaces/pokemon';
import FavoritePokemons from './components/FavoritePokemons';

export type {PokemonsResponse} from './interfaces/pokemons-response'; //Solo se exporta el tipo porque no es un objeto, es un tipo de dato
export type {SimplePokemon} from './interfaces/simple-pokemon';
export type {Pokemon} from './interfaces/pokemon'


export * from './components/PokemonGrid'
