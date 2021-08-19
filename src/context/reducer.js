import {SET_INPUT_VALUE} from './constant'

const Reducer = (state, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
           return {
                ...state,
                inputValue: action.payload
            };
    
        default:
            return state;
    }
} 

export default Reducer