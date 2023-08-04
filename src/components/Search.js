import React, { useState } from "react";
import classes from './Search.module.css'

const Search=(props)=>{
    const[placeData,setplaceData]= useState(null);
    const[temp,settemp]=useState(null);
    const[showBackdrop,setshowBackdrop]=useState(false);
    const[showModal,setshowModal]=useState(false);

    const fetchdata= async(event)=>{
        if(event.key==='Enter'){
            setplaceData(event.target.value)
            const response=  await fetch(`api.openweathermap.org/data/2.5/forecast?q=${placeData}&units=metric&APPID=ec564d0c5efaa86dbf9e337366080c42`);
            const data= response.json();
            settemp(data.main.temp);
            setshowBackdrop(true);
            setshowModal(true);
        }
    }

    return(
        <>
            {this.props.clicked ? <div className={classes.Search}>
            <input type="text" onClick={(event)=>fetchdata(event)}></input>
            </div>:null}
        </>
    );
}
export default Search;