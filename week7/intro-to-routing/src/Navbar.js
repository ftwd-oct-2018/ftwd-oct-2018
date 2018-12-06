import React, {Component} from 'react';
import './App.css'

import { NavLink } from 'react-router-dom';


class Navbar extends Component {

    render(){
        return(
            <div>
                <NavLink exact activeClassName="red" to="/">Home</NavLink>

            <NavLink exact activeClassName="red" to="/meet-our-staff">
                 Meet Our Staff
            </NavLink> 

                  <NavLink activeClassName="red" to="/about">About Us</NavLink>

                   <a>Contact Us</a>
            </div>
        )
    }



}

export default Navbar;