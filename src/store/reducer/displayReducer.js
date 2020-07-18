import {DISPLAY_RESULT, SHOW_ENTRY} from '../action/displayAction'

const initialState = {
    result: '',
    entry: ''
}

export const displayReducer = (state = initialState, action) => {

    switch (action.type) {
        case DISPLAY_RESULT:
           return state = {
                ...state,
                result: action.result
            }
            case SHOW_ENTRY:
            return state = {
                ...state,
                entry: action.entry
            }
    
        default:
            return state;
    }
}