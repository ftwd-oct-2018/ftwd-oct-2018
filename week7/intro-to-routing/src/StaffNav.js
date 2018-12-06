
import React, {Component} from 'react'
import {Link} from 'react-router-dom';



class StaffNav extends Component {

  

    render(){

        return(
            <div>
            <Link to="/meet-our-staff/1"> Edmunton </Link>
            <Link to="/meet-our-staff/2"> Canela </Link>
            <Link to="/meet-our-staff/3"> Samantha </Link>
            <Link to="/meet-our-staff/4"> Wolfgang </Link>
            </div>
        )

}





}


export default StaffNav;
