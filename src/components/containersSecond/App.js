import React, { Component } from 'react'
// import MyBody from './components/exerciseOne/Body';
// import BodiedTwo from './components/exerciseTwo/BodyTwo';
import JsonData from './components/exerciseTwo/JsonData';
// import ExtendsComponented from './components/exerciseThird/ExtendsComponents';
// import ClassState from './components/exerciseFourth/classState';
// import ChangeState from './components/exerciseFive/ChangeState';
// import LifedCycle from './components/exerciseSix/LifeCycle';
// import Loginned from './components/exercisePractice/Login';
// import FetchApi from './components/exerciseSeven/FetchApi';
import FormReact from './components/exerciseEight/FormReact';

class MyApp extends Component {

    constructor() {
        super();
        this.state = {
            allJsonData: JsonData
        }
        // this.handleCheck = this.handleCheck.bind(this)
    }

    // handleCheck(id) {

    //     this.setState((prevState => {
    //         const result = prevState.allJsonData.map(item => {
    //             if(item.id === id){
    //                 // buscar el id que coincida con el checkbox seleecionado y cambiarlo
    //                 console.info('valor por defecto', item.validated);
    //                 item.validated = !item.validated
    //             }
    //             console.info('nuevo valor', item.validated);
    //             return item            
    //         })
    //         return {
    //             // actualizar el state
    //             allJsonData : result
    //         }
    //     }))
    // }


    render() {
        // const item = this.state.allJsonData.map(data =>
        //     <BodiedTwo key={data.id} item={data} handledCheck={this.handleCheck} />
        // )
        return (
            <div>
                {/* {item} */}
                {/* <LifedCycle/> */}
                {/* <Loginned/> */}
                {/* < FetchApi /> */}
                <FormReact />
            </div>
        )
    }
}

export default MyApp;