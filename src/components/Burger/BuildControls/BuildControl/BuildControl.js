import React, {PropTypes} from 'react'
import classes from './BuildControl.module.css'

const BuildControl = (props) =>  (
        <div>
            <div>{props.label}</div>
            <button>Less</button>
            <button>More</button>
        </div>
    );

BuildControl.propTypes = {}

export default BuildControl