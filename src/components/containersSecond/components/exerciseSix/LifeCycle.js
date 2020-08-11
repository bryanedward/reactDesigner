import React from 'react'
import ViewCycled from './ViewCycle'

class LifedCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            unReadMessage: [
                "Call to your mom",
                "u need to go dentist"
            ]
        }
    }


    componentDidMount(prevProps, prevState, snapshot) {
        // cambio del state a los 1.5 segundos
        //se carga al finalizar los componentes
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1500)
    }


    render() {
        console.log('render')
        return (
            <div>
                <ViewCycled
                    data={this.state.loading}
                    dentist={this.state.unReadMessage.length} />
            </div>
        );
    }
}




export default LifedCycle;