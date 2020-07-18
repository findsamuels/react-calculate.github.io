import React from 'react'

import { Row } from 'react-bootstrap'
import classes from './ControlPanel.module.scss';
import Controls from './Controls';

const ControlPanel = props => {
    return (
        <Row className={classes.ControlPanel}>
<Controls/>
        </Row>
    )
}

export default ControlPanel
