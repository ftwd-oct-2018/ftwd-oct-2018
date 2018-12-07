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


        <Switch>
          <Route path="/project-index" component = {ProjectIndex} />
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
