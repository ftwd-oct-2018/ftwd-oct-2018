import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectIndex from './components/ProjectIndex';
import {Route, Switch, Link} from 'react-router-dom';
import SingleProject from './components/SingleProject';
import Signup from './components/Signup';
import UserService from './services/UserService';
import Login from './components/Login';


class App extends Component {

  state={
    loggedInUser: null
  }
  service = new UserService()





    fetchUser(){
      console.log('trying to see whos logged in')
      if( this.state.loggedInUser === null ){
        this.service.loggedin()
        .then(theActualUserFromDB =>{
          this.setState({
            loggedInUser:  theActualUserFromDB
          }) 

        })
        .catch( err =>{
          this.setState({
            loggedInUser:  false
          }) 
        })
      }
    }



    logInTheUser = (userToLogIn) => {
      this.setState({logInTheUser: userToLogIn})
    }



    showUser = () =>{
      if(this.state.loggedInUser){
        return(
          <div>Welcome, {this.state.loggedInUser.username}</div>
        )
      }
    }


    logout = () =>{
      this.service.logout().then(()=>{
        this.setState({loggedInUser: null});
      })
    }



  render() {
    {this.fetchUser()}
    console.log(this.state)
    return (
      <div>
      {this.showUser()}
      <h1>We're Still Here</h1>

      <nav> 
        <Link to="/project-index"> View Projects</Link>
        <Link to="/signup"> Sign Up For Account</Link>
        <Link to="/login"> Login </Link>
        <button onClick = {this.logout} >Logout</button>
      </nav>


{/* // if you need to pass props to a component you are rendering inside a route, you must use render instead of component={} */}
{/* // furthermore, if you do this, you must pass in {...this.props} in order to have access to this.props.history and this.props.match.params */}


        <Switch>
          <Route path="/project-index" render={(props) => <ProjectIndex {...props} currentUser={this.state.loggedInUser} /> } />
          <Route path="/project/:id" component = {SingleProject} />
          {/*                     |      */}
          {/*                     -------------------------------------------------------------------------------------------         */}
          {/*                                                                                                                |                 */}
            {/*                                                                                                              |         */}
          
          {/* in the single project component, we will have access to whatever is in the url inside this.props.match.params.id */}
          <Route path="/signup" render = {(props)=> <Signup {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
          <Route path="/login" render = {(props)=> <Login {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
        
        
        
        </Switch>


      
      </div>
    );
  }
}

export default App;
