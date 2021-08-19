import React, {useContext} from 'react'
import { SET_INPUT_VALUE } from '../context/constant';
import { Context } from './../context/store';

const InputComponents = () => {
    const [state, dispatch] = useContext(Context)
    const handleInputChange = (e) => {
        console.log(e.target.value)
        dispatch({type:SET_INPUT_VALUE, payload:e.target.value})
    }
    return (
        <div>
            <input value={state.inputValue} type='text' onChange={handleInputChange}/>
        </div>
    )
}

export default InputComponents
