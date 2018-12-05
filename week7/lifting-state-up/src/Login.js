import React, {Component} from 'react';
import './App.css';



class Login extends Component{
    state={
        usernameInput: '',
        passwordInput: '',
     
    }


    changeInput = (e) =>{
        this.setState({[e.target.id]: e.target.value});
    }



        logMeIn = (e)=>{
            e.preventDefault();
            const newUser = {};
            newUser.username = this.state.usernameInput;
            newUser.password = this.state.passwordInput;

            this.props.passUserToParentComponent(newUser);

            this.setState({usernameInput: '', passwordInput: ''})
        }



    render(){
        return(
            <div>

            <form onSubmit={this.logMeIn}>
            <label> Username</label>
            <input value={this.state.usernameInput}
             id="usernameInput" 
             type="text"
             onChange={(e)=> this.changeInput(e)}/>

            <br />
            <br />

            <label>Password</label>
            <input value={this.state.passwordInput}
             id="passwordInput" 
             type="password" 
             onChange={(e)=> this.changeInput(e)}/>

            <br />


            <button> Login </button>
            </form>



             </div>
        )
    }

}

export default Login;