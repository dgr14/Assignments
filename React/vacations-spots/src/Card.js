import React from "react";

const Card = (props) => {
    
    const styles = {
        
        div: {
            border: "solid black 2px",
            padding: "10px",
            backgroundColor: props.backgroundColor
        },
    }
    return(
        <div style ={styles.div}>
            <h1>{props.place}</h1>
            <p>{props.price} $</p>
            <p>{props.time}</p>
        </div>
    )
}

export default Card;