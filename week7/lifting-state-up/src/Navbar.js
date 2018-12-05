import React, {Component} from 'react';
import './App.css'


class Navbar extends Component{


    showUser = ()=>{
        if(this.props.theCurrentUser){
            return(
                <div>
                    Welcome {this.props.theCurrentUser.username}
                </div>
            )
        }
    }


    showLoginOrLogout = () =>{
        if(this.props.theCurrentUser){
            return(
                <span>
                <a href="www.ironhack.com">Logout</a>
                <a href="www.ironhack.com">Your Profile</a>
                </span>
            )
        
        } else{
            return(
                <a href="www.ironhack.com">Login</a>
            )
        }
    }

 

    render(){
        console.log(this.props)
        return(
            <div>
                {this.showUser()}

                <a href="www.ironhack.com">Home</a>

                {this.showLoginOrLogout()}


                <a href="www.ironhack.com">View Options</a>
                <a href="www.ironhack.com">Setting</a>
                <a href="www.ironhack.com">About Us</a>

            </div>
        )
    }



}



export default Navbar


