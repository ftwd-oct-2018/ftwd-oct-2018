import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AsyncParallelBailHook } from 'tapable';

class App extends Component {

  render() {
    const theWord = "Ironhack"

    const randomAnimals = ['Alligator', 'guinea pig','wallabee', 'rooster' ]

    const theDiv = 
    (
    <ul>
   { randomAnimals.map((oneAnimal)=>{
      return <li> {oneAnimal} </li>
    })  }
    </ul>
    )
    // map function is the standard way of looping through an array to show stuff on the page


    
    
    // you can save a bunch of html in a jsx variable with no quotes
    // and you can interpolate anywhere you want on the page
    
    
     const user = {
       firstName: 'Harper',
       lastName: 'Perez',
       avatarUrl: ''
     };
     

    const formatName = (theUserArgument) => {
      return `${theUserArgument.firstName} ${theUserArgument.lastName}`;
    }

    const element = 
    (     
       <h2>
        Hello, {formatName(user)}!
      </h2>
    )
    // this jsx essentially gets compiled into this regulat javascript
    // const blah = document.createElement('h2');
    // blah.html = Hello,+  formatName(user);


    



    return (
      <div className="App">

      <img src="business-wolf.jpg"/> 

      

      <h1> Welcome To My Super Cool React Intro App</h1>
      
        <h3> This app was made at {theWord} </h3>
        {/* interpolation in jsx  */}

        {theDiv}





    <div className="App">
        <h1> Hello Ironhackers! </h1>
        {element}
      </div>




 
      </div>
    );
  }
  
}

export default App;










  
 



