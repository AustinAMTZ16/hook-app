import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setcounter] = useState(10)

    /*const incrementar=()=>{
        setcounter(counter+1)
    }*/

    const incrementar = useCallback((num) => {
        setcounter(c=>c+num)
    },[setcounter])

    return (
        <div>
            <h1>useCallBack Hook: {counter}</h1>
            <hr/>
             <ShowIncrement incrementar={incrementar}/>
        </div>
    )
}
