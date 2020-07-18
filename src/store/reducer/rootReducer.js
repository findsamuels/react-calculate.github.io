import {combineReducers} from 'redux'
import {} from 'react-redux'
import { displayReducer } from './displayReducer'

export const rootReducer = combineReducers({
    display: displayReducer
})