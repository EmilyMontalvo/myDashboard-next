'use client'
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, substractOne, initCounterState } from '@/store/counter/counterSlice';
import React, { useEffect } from 'react'

interface Props {
    value?: number;
}

export interface CounterResponse {
    method: string;
    count:  number;
}


const getApiCounter = async(): Promise<CounterResponse> => {
    const data = await fetch('/api/counter')
    .then(res => res.json())
    return data
}

const CartCounter = () => { 
    //!  1. El valor que viene es 10, que se debería cargar cuando se inicia el componente o cero que se viene por defecto

    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    // useEffect(()=>{
    //     dispatch(initCounterState(value)) // Ya con esto cambia el global state a lo que se mande en el value
    // },[dispatch,value]);

    useEffect(()=>{
        getApiCounter().then(({count}) => dispatch(initCounterState(count))); // Consumo la restapi  y ya no necesito el value porque lo obtengo de mi api 
    },[dispatch]);

    // ! 2. Se mandó un global state de 5.

    return (
        <>
            <span className='text-9xl'>{count}</span> {/*Count es del estado global que inicia en 5 siempre*/ }
            <div className='flex'>
                <button
                    className='flex items-center justify-center p-2 rounded-xl bg-blue-900 text-white hover:bg-blue-600 transition-all w-[100px] mr-2'
                    onClick={() => dispatch(addOne())}>
                    +1
                </button>
                <button
                    className='flex items-center justify-center p-2 rounded-xl bg-red-900 text-white hover:bg-red-600 transition-all w-[100px] mr-2'
                    onClick={() => dispatch(substractOne())}>
                    -1
                </button>
            </div>
        </>
    )
}

export default CartCounter
