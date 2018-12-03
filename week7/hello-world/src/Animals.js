import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AsyncParallelBailHook } from 'tapable';


    
class Animals extends Component {
    render(){
    const randomAnimals = ['Alligator', 'guinea pig','wallabee', 'rooster' ]

    const theDiv = 
    (
    <ul>
   { randomAnimals.map((oneAnimal)=>{
      return <li> {oneAnimal} </li>
    })  }
    </ul>
    )


        return (
            <div>
            {theDiv}
            </div>
        )
    }



}



export default Animals;