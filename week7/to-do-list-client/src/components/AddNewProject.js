import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import {Link} from 'react-router-dom';


class AddNewProject extends Component {
    state={
        titleInput: '',
        descriptionInput: ''
    }

    updateInput = (e) => {
        this.setState({[e.target.id]: e.target.value })
        // this.state[e.target.id] = e.target.value
        // fancy way of saying this
    }

    createANewProject = (e) => {
        e.preventDefault();
        const newTitle = this.state.titleInput;
        const newDescription = this.state.descriptionInput;
        // grab the values from the DOM

        // gotta send withCredentials: true as a header because
        // the route we are posting to uses req.user which is by default protected by express
        Axios.post("http://localhost:5000/api/tasks/add-new",
         {theTitle: newTitle, theDescription: newDescription},
         {withCredentials: true})
         .then((responeFromOurAPI)=>{
            console.log('success', responeFromOurAPI)

            this.props.letTheIndexComponentKnowThatWeAddedAProject();
            // after we send the axios request, we call the function in the parent component
            // to make that component go and get all the project again so now it should have the new project we just added


         })
         .catch((err)=>{
            console.log('error creating task', err)
         })
    }


    render(){
        return(
            <div>
                <h2>Add New Project</h2>
                <form onSubmit={this.createANewProject}>

                    <label>Title</label>
                    <input value={this.state.titleInput} id="titleInput" onChange={this.updateInput} />

                    <label>Description</label>
                    <input value={this.state.descriptionInput} id="descriptionInput" onChange={this.updateInput} />

                    <button>Save</button>

                </form>
                
            </div>
        )
    }





}


export default AddNewProject;

