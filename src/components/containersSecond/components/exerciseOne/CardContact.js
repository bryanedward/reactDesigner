import React from 'react';



const styleS = {
    height: 90,
    weigth: 90
}

function Card(props) {
    return (
        <div>
            <img src={props.contact.imgUrl}
                alt={props.contact.name} style={styleS} />
            <h4 style={{ color: props.contact.last_name ? "blue" : "red" }} >{props.contact.name}</h4>
            <p style={{ display: !props.contact.last_name && "none" }}>{props.contact.last_name}</p>
            <hr />
        </div>
    )
}


export default Card;