import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import {Link} from 'react-router-dom';


class ProjectIndex extends Component{
    state={
        allTheProjects: []
    }

    // keep in mind, the first time the render function runs, the state will look exactly like we set it up in the contstructor above
    // so since we are doint this.state.alltheProject.map, equalling to an empty array in the beginning is a clever trick because
    // this first time the component renders, the state will have an empty array and will loop through that empty array and show nothing
    // you will not see this because it happens very quickly
    // however, if we do start out be equalling our this.state.alltheProjects to an empty array,
    // we will get an error because we are trying to do .map on null, but you are not allowed to do that

// componentWillMount runs everytime the component is about to be rendered on the page
// in this function, we will make an axios request to our api route
// the response we ge back should be equal to an object with a .data key inside it, and that .data will be equal to all the tasks from our API

    componentWillMount(){
        Axios.get('http://localhost:5000/api/tasks')
        .then((responseFromApi)=>{
            this.setState({allTheProjects: responseFromApi.data})
            // once we get all the tasks, we set the state so that the state will have all the tasks in there
        })
        .catch((err)=>{
        })

    }


    // because componentWillMount will still allow the component to intialize before running, we can protect ourselves
    // by putting an if statement before anytime we want to loop through something in our state
    showAllProjects = () => {
        if(this.state.allTheProjects){

            // once we have all the tasks in the state, we can map through them as we normally do
            return this.state.allTheProjects.map((eachProject)=>{
                return(
                    <div key={eachProject._id}>
                    <h3>{eachProject.title}</h3>
                    <h6>{eachProject.description}</h6>
                    <Link to={'/project/'+ eachProject._id} >See Details</Link>
                </div>
            )
        })
        
        }
    }



    render(){
        console.log('~~~~~~~~~~~~~~~~~~~~',this.state);
        return(
            <div>
            <h1>Project Index</h1>
            {this.showAllProjects()}
            </div>
        )
    }



}


export default ProjectIndex;