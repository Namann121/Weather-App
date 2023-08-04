import React,{useState} from "react";
import Display from "./Display";
import Error from "./Error";
import Image from "./Image";
import classes from './Landing.module.css';
import myclasses from './Search.module.css';

const Landing = (props) => {
    const[landing,setLanding]=useState(true);
    const[placedata,setplacedata] = useState(null);
    const[temp,settemp] = useState(null);
    const[min,setmin] = useState(null);
    const[max,setmax] = useState(null);
    const[humidity,sethumidity] = useState(null);
    const[icon,seticon] = useState(null);
    const[desc,setdesc] = useState(null);
    const[error,seterror] = useState(false);
    const[clicked,setclicked] = useState(false);
    
    // const data1=(event)=>{setplacedata(event.target.value)}

    const getSearch=()=>{
        setclicked(true);
    }

    const data1=(event)=>{
        setplacedata(event.target.value);
    }

    const fetchdata = async(event) => {try{
        if(event.key==='Enter'){
            event.preventDefault();
            // setplacedata(event.target.value)
            if(placedata!==null){
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${placedata}&units=metric&appid=ec564d0c5efaa86dbf9e337366080c42`)
                const data = await response.json();
                console.log(data)
                settemp(data.list[0].main.temp);
                sethumidity(data.list[0].main.humidity);
                setmax(data.list[0].main.temp_max);
                setmin(data.list[0].main.temp_min);
                setdesc(data.list[0].weather[0].description);
                seticon(data.list[0].weather[0].icon);
                setclicked(false);
                setLanding(false);
            }
    }}catch(error){
        seterror(true);
        setLanding(false);
    }
}

    const restart =()=> {
        setplacedata(null);
        setLanding(true);
        settemp(null);
        seterror(false);
        sethumidity(null);
        setclicked(false);
        setmin(null);
        setmax(null);
        seticon(null);
        setdesc(null);
    } 

    return(
        <>
        <Image>
        {landing?
            <div className={classes.Landing}>
                <h1>Search The Location</h1>
                <button onClick={()=>{setclicked(true)}}>Get Search Bar</button>
            </div>:<div className={classes.LandingRemove}> 
                <h1>Search The Location</h1>
                <button onClick={()=>{setclicked(true)}}>Get Search Bar</button>
            </div>
        }
        {clicked?
            <div className={myclasses.Search}>
             <input type='text' placeholder='Search...and Press Enter' onChange={(event)=> data1(event)} onKeyDown={(event)=>fetchdata(event)} />
            </div>:temp?<div className={myclasses.SearchRemove}>
                <input type='text' placeholder='Search...and Press Enter' onChange={(event)=> data1(event)} onKeyDown={(event)=>fetchdata(event)} />
            </div>:null
        }

        {error?
        <Error startAgain={restart}/> : null
        }

        {temp?
            <Display startAgain={()=>restart()} description={desc} maximum={max} minimum={min} humidity={humidity} temp={temp} place={placedata} icon={icon}/> :null
        }
        </Image>
        </>
    );

}
export default Landing;