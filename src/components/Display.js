import React from "react";
import classes from './Display.module.css';

const Display=(props)=>{
    let image='';
    return(
        <div className={classes.Display}>
            <h1 className={classes.place}>{props.place}</h1>
            <hr></hr>
            <p className={classes.Temp}>{props.temp}°C</p>
            <p className={classes.left}>Minimum: {props.minimum} °C</p>
            <p className={classes.right}>Maximum: {props.maximum} °C</p>
            <p className={classes.data}>Humidity: {props.humidity}%</p>
            <hr></hr>
            <img src={image} className={classes.image} />
            <p className={classes.desc}>{props.description}</p>

            <button className={classes.goBack} onClick={props.startAgain}>Search Again</button>
        </div>
    );
}
export default Display;