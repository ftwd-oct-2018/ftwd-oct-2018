import React, { Component } from 'react';
import './App.css';
import arrayOfContactsFromOtherFile from './contacts.json'



class ContactList extends Component{
    state = {
        partialListOfContacts: arrayOfContactsFromOtherFile.splice(0,5),
        // splice not only deletes the stuff from the array but it also returns a new array with those things that just got deleted
        fullListOfContacts: arrayOfContactsFromOtherFile,
        sortAscending: true
    }


    showListOfContacts = () => {
        return (
            this.state.partialListOfContacts.map((eachContact, i)=>{
                return(
                <div className="contactCard" key={i}>
                <h1>{eachContact.name}</h1>
                <img src={eachContact.pictureUrl} />
                <button onClick = {()=>this.deleteCelebrity(i)}> Delete This Celebrity</button>
                <h3>Popularity: {eachContact.popularity}</h3>
                </div>
                    )
            })
        )
    }

    deleteCelebrity = (indexOfCelebrity) =>{
        const currentList = [...this.state.partialListOfContacts];
        currentList.splice(indexOfCelebrity, 1);
        this.setState({partialListOfContacts: currentList});
    }

    addARandomContact = () =>{
        const newPartialList = [...this.state.partialListOfContacts];
        const fullList    = [...this.state.fullListOfContacts];
        const randomNumber = Math.floor(Math.random()* fullList.length);
        const randomNewContact = fullList[randomNumber];
        newPartialList.unshift(randomNewContact);
        fullList.splice(randomNumber, 1)
        this.setState({
            partialListOfContacts: newPartialList,
            fullListOfContacts: fullList
        })

    }


    sortCelebrities = (whatShouldISortBy) => {
        const theList = [...this.state.partialListOfContacts];
        theList.sort((a,b)=>{
            if(a[whatShouldISortBy] > b[whatShouldISortBy]){
                return this.state.sortAscending? 1 : -1
            } else if (a[whatShouldISortBy] < b[whatShouldISortBy]){
                return this.state.sortAscending? -1 : 1
            }
            return 0;
        })
        

        this.setState({
            partialListOfContacts: theList,
            sortAscending: !this.state.sortAscending
        })
    }


    render(){
        console.log(this.state.partialListOfContacts)
        return(
            <div className="theList">
            <button onClick = {this.addARandomContact} > Add Random Contact </button>
            <button onClick = {() => this.sortCelebrities('name')}> Sort By Name {this.state.sortAscending? 'Ascending': 'Descending'} </button>
             <button onClick = {() => this.sortCelebrities('popularity')}> Sort By Popularity  {this.state.sortAscending? 'Ascending': 'Descending'} </button> 
                {this.showListOfContacts()}
            </div>
        )
    }




}





export default ContactList