import React, {Component} from 'react';
import './App.css';
import allTheCountries from './countries.json';
import {Link} from 'react-router-dom';



class CountryDetails extends Component{
    state={
        code: this.props.match.params.countryCode,
        allCountries: allTheCountries
    }

    componentWillReceiveProps(theMagicalProps){
        this.setState({code: theMagicalProps.match.params.countryCode })
    }



    showBorders(whichCountry){
        if(!whichCountry.borders.length){
            return;
        }
        return whichCountry.borders.map((oneBorder, i)=>{

            const theActualCountryObjectForThatBorder = this.state.allCountries.find((oneCountry)=>{
                return oneCountry.cca3 === oneBorder
            })
            const theActualCountryName = theActualCountryObjectForThatBorder.name.common;
            const theFlag = theActualCountryObjectForThatBorder.flag;


            return (
                <tr key={i}>
                  <td>Borders</td>
                  <td>
                    <ul>
                        <li ><Link to={'/'+oneBorder}> {theFlag} {theActualCountryName}</Link></li>
                    </ul>
                  </td>
                </tr>
            )
        })
    }


    maybeShowCapital(whichCountry){
        if(whichCountry.capital[0] !== ""){
            return (
                <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>   {whichCountry.capital[0]}  </td>
                </tr>
            )
        }

    }




    render(){
        const theCountry = this.state.allCountries.find((oneCountry)=>{
            return oneCountry.cca3 === this.state.code
        })

        console.log(theCountry)

        if(!theCountry){
            return(
                <div>
                    Sorry This country Could not be found
                </div>
            )
        }

       

        return(
            <div className="col-8">
            This is country details
            <h1>   {theCountry.name.common}  </h1>
            <table className="table">
              <thead></thead>
              <tbody>
                  {this.maybeShowCapital(theCountry)}
                <tr>
                  <td>Area</td>
                  <td>{theCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                
                        {this.showBorders(theCountry)}
                
              </tbody>
            </table>
          </div>





           
        )
    }





}



export default CountryDetails;






