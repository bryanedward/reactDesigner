import React from 'react'

function ViewCycled(props) {
    console.log(props)
    return (
        props.data === true ?
            <h1>Estoy cargando</h1> :
            <h2>Tienes {props.dentist} deberes hoy</h2>
    )


}


export default ViewCycled;