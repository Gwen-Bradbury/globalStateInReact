import React, { useContext } from 'react'
import { Context } from './../context/store';

const DisplayComponents = () => {
    const [state] = useContext(Context)
    return (
        <div>
            <h1>{state.inputValue}</h1>
        </div>
    )
}

export default DisplayComponents
