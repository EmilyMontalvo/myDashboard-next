'use client'
import React from 'react'
import Link from 'next/link'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemons/pokemonsSlice'
interface Props {
    pokemon: SimplePokemon
}

const PokemonCard = ({ pokemon }: Props) => {

    const isFavorite = useAppSelector(state => !!state.pokemons.favorites[pokemon.id]);
    //! doble negación !! :  lo convierte a booleano, me sale un true cuando uno si existe
    const dispatch = useAppDispatch();
    const onToggle = () => {
        dispatch(toggleFavorite(pokemon))
    }

    return (
        <>
            <div className="mx-auto right-0 mt-2 w-60">
                <div className="bg-white rounded overflow-hidden shadow-lg">
                    <div className="flex flex-col items-center text-center p-6 bg-gray-900 border-b">
                        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
                            key={pokemon.id}    //NO OLVIDARSE DE PONER EL KEY O NO VALE 
                            width={100}
                            height={100}
                            alt={pokemon.name}
                            priority={false} //Priority para la carga progresiva de la imagen
                        />
                        <Link href={`/dashboard/pokemon/${pokemon.name}`} className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</Link>
                        <div className="mt-5">
                            <Link
                                href={`/dashboard/pokemon/${pokemon.id}`}
                                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                            >
                                Más Información
                            </Link>
                        </div>
                    </div>
                    <div className="border-b">
                        <div onClick={onToggle}>
                            <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">

                                <div className="text-green-600">
                                    {isFavorite
                                        ? <IoHeart className='text-red-600' />
                                        : <IoHeartOutline className='text-red-600' />
                                    }
                                </div>
                                <div className="pl-3">
                                    <p className="text-sm font-medium text-gray-800 leading-none">
                                        {isFavorite
                                            ?  'Es favorito'
                                            : 'No es favorito'
                                        }
                                    </p>
                                    <p className="text-xs text-gray-500">View your campaigns</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default PokemonCard
