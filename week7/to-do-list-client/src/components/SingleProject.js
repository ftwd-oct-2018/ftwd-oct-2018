import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';


class SingleProject extends Component{
    state={}



    componentWillMount(){
        const theID = this.props.match.params.id;
        Axios.get('http://localhost:5000/api/task/details/'+theID)
        .then((theThingIGetBackFromApi)=>{

            console.log('------___---__-_-_--_-_-__-_-_-_-_-___-_-----',theThingIGetBackFromApi)

            this.setState({theActualProject: theThingIGetBackFromApi.data})

        }).catch(()=>{

        })
    }


    showProjectDetails = () =>{
        if(this.state.theActualProject){
            return(
                <div>
                    <h2>{this.state.theActualProject.title}</h2>
                    <h3>{this.state.theActualProject.description}</h3>
                </div>
            )
        }
    }




    render(){
        console.log(this.state)
        return(
            <div>
                <h1> Project Details Page</h1>
                {this.showProjectDetails()}
                </div>
        )
    }




}



export default SingleProject;