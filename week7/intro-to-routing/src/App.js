import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import AboutUs from './AboutUs';
import MeetStaff from './MeetStaff';
import StaffNav from './StaffNav';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />


        <Switch>
          <Route path='/meet-our-staff' component = {StaffNav} />
        </Switch>


        <Switch>
          <Route exact  path='/' component={Main}/>
          <Route exact path='/meet-our-staff/:index' component={MeetStaff}/>
          {/* is the url ===  path='/' then is show that component */}
          <Route path='/about' component={AboutUs}/>
        </Switch>





    {/* {if route === '/'}{
      <Main />
    }

    {if route === 'about-us'}{
          <AboutUsComponent /> 
    }

    {if route === 'staff'}{
          <MeetOurStaffComponent />
    }

    {if route === 'contact'}{
          <ContactUsComponent />
    } */}
    {/* ^ this is fake code but the idea here is essentially how React handles routes */}
    {/* we're gonna put all of our components on App component right from the start */}
    {/* and only render the one that matches our variable(our url) */}


   
      </div>
    );
  }
}

export default App;
