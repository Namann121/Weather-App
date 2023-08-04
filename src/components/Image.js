import React from "react";
import classes from './Image.module.css';

const Image=(props)=>{
    return(
        <div className={classes.image}>
            {props.children}
        </div>
    );
}
export default Image;