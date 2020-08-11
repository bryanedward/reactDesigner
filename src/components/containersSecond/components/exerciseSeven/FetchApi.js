import React from 'react'

class FetchApi extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            loading: true,
            data : []
        }
    }

    componentDidMount(){
        fetch("https://swapi.dev/api/people/2/")
            .then(result => result.json())
            .then(result => {
                
                this.setState({
                    loading : false,
                    data : result
                })
            })
            
    }

    render(){
        const loading = this.state.loading ? "cargando" : this.state.data.name
        return(
            <div>
                <h1>Fetch Api de {loading}</h1>
            </div>
        )
    }

}


export default FetchApi;