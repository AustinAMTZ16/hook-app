import React from 'react'
import { useCouter } from '../../hooks/useConter'
import './counter.css'
export const CounterWithCoustomHook = () => {

    const {state, increment, decrement, reset} = useCouter();

    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr />
            <button onClick={()=>increment(2)} className='btn'>+1</button>
            <button onClick={reset} className="btn">Reset</button>
            <button onClick={()=>decrement(2)} className='btn'>-1</button>
        </>
    )
}
