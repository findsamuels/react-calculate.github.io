import React from 'react'

import classes from './Calculator.module.scss'
import DisplayPanel from './DisplayPanel'
import ControlPanel from './ControlPanel'

const Calculator = props => {
    return (
        <div className={classes.Calculator} >
            <DisplayPanel/>
            <ControlPanel/>
        </div>
    )
}


export default Calculator
