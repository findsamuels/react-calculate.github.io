import React from 'react'

import classes from './DisplayPanel.module.scss'
import {useSelector} from 'react-redux'
const DisplayPanel = props => {
    const entry = useSelector(state => state.display.entry)
    const result = useSelector(state => state.display.result)
    return (
        <div className={classes.DisplayPanel}>
 <p className={classes.DisplayEntry}>{entry}</p>
 <h1 className={classes.DisplayResult}>{result}</h1>
        </div>
   
    )
}


export default DisplayPanel
