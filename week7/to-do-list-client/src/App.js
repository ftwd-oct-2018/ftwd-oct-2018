import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectIndex from './components/ProjectIndex';
import {Route, Switch, Link} from 'react-router-dom';
import SingleProject from './components/SingleProject';


class App extends Component {
  render() {
    return (
      <div>
      <h1>We're Still Here</h1>

      <nav> 
        <Link to="/project-index"> View Projects</Link>
      </nav>


{/* // if you need to pass props to a component you are rendering inside a route, you must use render instead of component={} */}
{/* // furthermore, if you do this, you must pass in {...this.props} in order to have access to this.props.history and this.props.match.params */}


        <Switch>
          <Route path="/project-index" render={(props) => <ProjectIndex {...props}  blah="whatever" /> } />
          <Route path="/project/:id" component = {SingleProject} />
          {/*                     |      */}
          {/*                     -------------------------------------------------------------------------------------------         */}
          {/*                                                                                                                |                 */}
            {/*                                                                                                              |         */}
          {/* in the single project component, we will have access to whatever is in the url inside this.props.match.params.id */}
        </Switch>


      
      </div>
    );
  }
}

export default App;
