import { Pokemon } from '@/pokemons';
import React, { cache } from 'react'

interface Props {
  params: { id: string };
}

const getPokemon = async (id: string) :Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {cache: 'force-cache'})//TODO: cambiar esto en un futuro
  .then(resp => resp.json())
  return pokemon;
}

const PokemonPage = async ({ params }: Props) => {
  // console.log({props}) (poniendo props:any)
  //Como lo estoy generando del lado del servidor los props vienen y se imprimen ahí (los parametros de la ruta)

  const pokemon = await getPokemon(params.id);
  return (
    <div>
      Pokemon {params.id}
      <div></div>
    </div>
  )
}

export default PokemonPage
