import React, { Component } from 'react'



class ExtendsComponented extends Component {

    render() {
        return (
            <div>
                <Header name="comida" />
                <Greeting />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <header> Necesito comprar , {this.props.name}</header>
        )
    }
}

class Greeting extends Component {
    render() {

        const date = new Date();
        let hours = date.getHours();
        let message;

        if (hours < 12) {
            message = 'good mornig';
        } else {
            message = 'Buenas tardes';
        }

        return (
            <div>
                <h3>Nunca subestimes a un pueblo pequeño
                y aburrido
                </h3>
                <br />
                {message}
            </div>
        )
    }
}


export default ExtendsComponented;