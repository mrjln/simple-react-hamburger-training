import React, {PropTypes} from 'react'
import './Backdrop.module.css'

const Backdrop = (props) => {
    return (
        props.show ? <div className={Backdrop}></div> : null

    );
}

export default Backdrop