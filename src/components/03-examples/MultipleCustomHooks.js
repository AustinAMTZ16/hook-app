import React from 'react'
import { useCouter } from '../../hooks/useConter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
    const {counter, increment}=useCouter(1);
    const {loading, data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data&&data[0];
    

    return (
        <>
          <h1>breakingbadapi!!!</h1>  
          <hr/>
          {
            loading
            ?
            (
              <div className="alert alert-info text-center">
              Loading...
              </div>
            )
              :
              (
                <blockquote className="blockquote text-right">
                  <p className="mb-0">{quote}</p>
                  <hr/>
                  <footer className="blockquote-footer">{author}</footer>
                </blockquote>
              )
          } 
          <button 
            onClick={increment}
            className="btn btn-primary">
            Siguiente quote
          </button> 
        </>
    )
}


/**
 * https://www.breakingbadapi.com/api/
 * https://www.breakingbadapi.com/api/quotes/1
 */