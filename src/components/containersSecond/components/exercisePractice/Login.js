import React from 'react'


class Loginned extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            status: true
        }
        this.handleCheck = this.handleCheck.bind(this);
    }

    

    render() {

        const status = this.state.status ? 'ingreso' : 'salida'
        
        const StyleS = {
            color: "red"
        }
        return (
            <div>
                <h1 style={ this.state.status? StyleS : null }>El estado actual es {status}</h1>
                <button onClick={() => this.handleCheck()}>
                    Acceder
                </button>
            </div>
        )
    }

    handleCheck() {
        this.setState(prevState =>{
            return{
                status: !prevState.status
            }
        })
    }

}


export default Loginned;