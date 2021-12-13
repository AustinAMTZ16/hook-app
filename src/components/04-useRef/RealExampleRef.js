import React, { useState } from 'react'
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'
import '../02-useEffect/effects.css';

export const RealExampleRef = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Real RealExampleRef</h1>
            <hr/>
            {show && <MultipleCustomHooks />}
            <br/>
            <button 
                className="btn btn-primary m-2"
                onClick={()=>{
                    setShow(!show)
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}