import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import allTheCountries from './countries.json';
import {Route, Switch, Link} from 'react-router-dom';
import CountryDetails from './CountryDetails';

class App extends Component {

  state={
    listOfCountries: allTheCountries
  }



  showAllTheCountries = () =>{
    return this.state.listOfCountries.map((eachCountry, i)=>{
      return (
      <Link key={i}
       className="list-group-item list-group-item-action"
        to= {   "/" + eachCountry.cca3   }    > {eachCountry.flag} {eachCountry.name.common}</Link>
      )
    })
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h1> Countries</h1>


      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="list-group">

                {this.showAllTheCountries()}
            </div>
            </div>




      <div className = "details">
        <Switch>
          <Route path="/:countryCode" component={CountryDetails}></Route>
          {/*                  |  */}
          {/*                  --------------------------------------------------------------------------- */}
          {/*                                                                                             |         */}
          {/* in the country details component, our params will be located at this.props.match.params.countryCode */}
        </Switch>
      </div>

            </div>
            </div>
    
      </div>
    );
  }
}

export default App;
