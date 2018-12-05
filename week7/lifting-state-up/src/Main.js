import React, {Component} from 'react'
import './App.css';
import Login from './Login';
import Navbar from './Navbar';


class Main extends Component{
    state={
        currentUser: null
    }



    logMeIn = (theUserToLoginWith) => {
        this.setState({currentUser: theUserToLoginWith,
        }, ()=>{
            console.log(this.state);
        })
    }


    render(){
        return(
            <div>
                <Navbar theCurrentUser = {this.state.currentUser} />


              <h2>Welcome To Super Cool Website</h2>


                <Login passUserToParentComponent = {this.logMeIn} />

            </div>
        )
    }



}



export default Main;






