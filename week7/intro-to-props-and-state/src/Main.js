import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './Example';



class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'Coolboy55',
            password: "BusinessWolf"
        }
        
    }


    changeUsername = (newUserName)=>{
        this.setState({username: newUserName})
    }



    render(){
        return (
            <div>
              Hi
              <Example
               theUserName = {this.state.username}
                thePassword={this.state.password}
                changeUserNameInParentComponent = {this.changeUsername}
                 />
      
            </div>
          );
    }
}






export default Main;