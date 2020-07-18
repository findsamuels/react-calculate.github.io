import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import classes from './Controls.module.scss'
import { useCalculate } from '../hooks/useCalculate'
import {useDispatch } from 'react-redux'
import * as actionCreators from '../store/action/displayAction'

import Button from './Ui/Button'
const Controls = props => {
    
    const {result, numbers, getNumbersArray, clearEntry} = useCalculate()
    const dispatch = useDispatch()
useEffect(() => {
    dispatch(actionCreators.displayResult(result))
    
}, [result, dispatch])

useEffect(() => {
    dispatch(actionCreators.showEntry(numbers))
   
}, [numbers, dispatch])

    const getNumbers = (event) => {
        let myNumbers = event.target.name
        getNumbersArray(myNumbers)
        
    }
 
    return (
        <React.Fragment>
<Col className={classes.Controls} xs='3'><Button name='ac' onClick={clearEntry}  color='red'>AC</Button></Col>
<Col className={classes.Controls} xs='3'><Button name='c' color='darkGrey' onClick={clearEntry}>C</Button></Col>
<Col className={classes.Controls} xs='3'><Button name='-' color='darkGrey' onClick={getNumbers}>+/-</Button></Col>
<Col className={classes.Controls} xs='3'><Button name='/' color='black' onClick={getNumbers} >/</Button></Col>
<Col className={classes.Controls} xs='3'><Button name='7' color='darkGrey' onClick={getNumbers}>7</Button></Col>
<Col className={classes.Controls} xs='3'><Button name='8' color='darkGrey' onClick={getNumbers}>8</Button></Col>
<Col className={classes.Controls} xs='3'><Button name='9' color='darkGrey' onClick={getNumbers}>9</Button></Col>
<Col className={classes.Controls} xs='3'><Button name='+'  onClick={getNumbers} color='black'>+</Button></Col>
<Col className={classes.Controls} xs='3'><Button name='4' color='darkGrey' onClick={getNumbers}>4</Button></Col>
<Col className={classes.Controls} xs='3'><Button  name='5' color='darkGrey' onClick={getNumbers}>5</Button></Col>
<Col className={classes.Controls} xs='3'><Button  name='6' color='darkGrey' onClick={getNumbers}>6</Button></Col>
<Col className={classes.Controls} xs='3'><Button  name='*'onClick={getNumbers} color='black'>*</Button></Col>
<Col className={classes.Controls} xs='3'><Button  name='1' color='darkGrey' onClick={getNumbers}>1</Button></Col>
<Col className={classes.Controls} xs='3'><Button  name='2' color='darkGrey' onClick={getNumbers}>2</Button></Col>
<Col className={classes.Controls} xs='3'><Button  name='3' color='darkGrey' onClick={getNumbers}>3</Button></Col>
<Col className={classes.Controls} xs='3'><Button  name='-'onClick={getNumbers} color='black'>-</Button></Col>
<Col className={classes.Controls} xs='3'><Button  name='0' color='darkGrey' onClick={getNumbers}>0</Button></Col>
<Col className={classes.Controls} xs='3'><Button  name='.' color='darkGrey' onClick={getNumbers}>.</Button></Col>
<Col className={classes.Controls} xs='6'><Button  name='='onClick={getNumbers} size='md' color='green'>=</Button></Col>
        </React.Fragment>
        
    )
}


export default Controls
