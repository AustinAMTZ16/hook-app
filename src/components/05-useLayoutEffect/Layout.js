import React, { useLayoutEffect, useRef} from 'react'
import { useCouter } from '../../hooks/useConter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css';


export const Layout = () => {

    const {counter, increment}=useCouter(1);
    const {data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data&&data[0];
    
    const pTag = useRef()

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientReact());
    }, [quote])

    return (
        <>
            <h1>Layout!!!</h1>  
            <hr/>
            
            <blockquote className="blockquote text-right">
                <p className="mb-0" ref={pTag}>{quote}</p>
                <hr/>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <button 
                onClick={increment}
                className="btn btn-primary">
                Siguiente quote
            </button> 
        </>
    )
}
