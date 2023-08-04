import React from "react";

const Error=(props)=>{
    return(
    <div>
        <h1>Invalid Location!</h1>
        <button onClick={props.startAgain}>Search Again</button>
    </div>
    );
}

export default Error;