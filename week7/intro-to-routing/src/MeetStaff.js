import React, {Component} from 'react';



class MeetStaff extends Component{

    state={
        theStaff : [
            {name: 'Sir Edmunton Wolfhour III', title: 'CWO', image: '/business-wolf.jpg'},
            {name: 'Canela Wolfson', title: 'Mareting Chief and Vice President', image: '/wolf-professional.jpg'},
            {name: 'Samantha Wolfstein', title: 'Chief Innovation Officer and Cofounder', image: '/wolf.jpg'},
            {name: 'Wolfgang Amadeus Mozart', title: 'Director of Entertainment and Chilling', image: '/mozart.jpg'} 
        ],

      theIndex: 0

    }

    componentWillReceiveProps(props){
        this.setState({theIndex: props.match.params.index-1})
    }


    render(){
        console.log("I Exist!")
        


        const staff = this.state.theStaff;
        const index = this.state.theIndex;
        const whichWolf = staff[index]
      

        
            return(
        
                <div>
                    <h1> {whichWolf.name} </h1>

                    <h3>{whichWolf.title}</h3>

                    <img src={whichWolf.image} />
                </div>
                
            )

    }




}


export default MeetStaff;