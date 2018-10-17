import React from 'react'
import hamburgerImg from '../../../assets/images/Hamburger_icon.svg.png'
import classes from './Hamburger.module.css'

const hamburger = (props) => {
    return (
        <div className={classes.Hamburger} onClick={props.clicked}>
            <img src={hamburgerImg} alt='menu-hamburger' />
        </div>
    );
};


export default hamburger