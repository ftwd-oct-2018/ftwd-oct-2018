import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Example extends Component {
    constructor(props){
        super(props)

        console.log(props)

        this.state = {}
    }

    


    render(){
        return(
            <div>
            <h1> Welcome,  {this.props.theUserName}</h1>
            <h2> Your password is:{this.props.thePassword}</h2>


            <button onClick = {() => {this.props.changeUserNameInParentComponent('uncoolBoy78')}} > 
            Click me to change to coolgirl77
            </button>
            </div>
        )
    }



}




export default Example;