import React from 'react';
import classes from './Button.module.css';

const Button = (props) =>{
    console.log(props.found);
    // return <button className={props.found === 0?classes.button:classes.button1} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
    return <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
}

export default Button;