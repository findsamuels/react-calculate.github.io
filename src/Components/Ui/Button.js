import React from 'react'
import PropTypes from 'prop-types'

import classes from './Button.module.scss'
const Button = props => {

    const buttonClass = []
    buttonClass.push(classes.Button, classes[props.color], classes[props.size])


    return (
        <button onClick={props.onClick} name={props.name} className={buttonClass.join(" ")}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
onClick: PropTypes.func,
name: PropTypes.string,
size: PropTypes.string,
color: PropTypes.string
}

export default Button
