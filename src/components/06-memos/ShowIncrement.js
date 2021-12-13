import React from 'react'

export const ShowIncrement = React.memo(({incrementar}) => {
    return (
        <button
            className="btn btn-primary"
            onClick={()=>{
                incrementar(5);
            }}
        >
            Incrementar
        </button>
    )
})
