import React, { useMemo, useState } from 'react'
import { useCouter } from '../../hooks/useConter'
import '../02-useEffect/effects.css'


export const MemoHook = () => {

    const {counter, increment}= useCouter(10);
    const [show, setShow] = useState(true)

    const procesoPesado = (iteracines)=>{
        for(let i=0; i>iteracines; i++){
            console.log('ahi vamos...');
        }
        return `${iteracines} iteraciones realizadas`;
    }

    const memoProcesoPesado=useMemo(() => procesoPesado, [counter])

    return (
        <div>
            <h1></h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-primary ml-3"
                onClick={()=>{
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}