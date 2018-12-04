import React, { Component } from 'react';

/*;
export const allHeroes = [
    {hero:'superman', villan:'lex luthor'},
    {hero: 'batman', villan:'the joker'},
    {hero: 'aquaman', villan:'pollution'}
];

export const listItems = allHeroes.map((ourHero, index) => { 
        return <li key={index} >{ourHero.hero} VS {ourHero.villan}</li>
    }
);
*/

class Lists extends Component {
    state = {  //This is the state where a lot of important values are stored
        heroes: [
            {hero:'superman', villan:'lex luthor', over:true, winner:'superman'},
            {hero: 'batman', villan:'the joker', over:false, winner:null },
            {hero: 'aquaman', villan:'pollution', over:true, winner:'pollution'}
        ],
        value : '',
        placeholder: 'enter hero',
        gameOver: false

    }

    deleteHero = (i) => {
        console.log(i)
        const heroes = this.state.heroes;
        heroes.splice(i, 1); //Remove ith hero from the array
        this.setState({ //Replace the state 
            heroes:heroes
        })
    }

    handleChange = (e) => { //on key press gets value of input 
        this.setState({ //changes value to hero name 
            value: e.target.value
        })
    }
    handleSubmit = (e) => { //on form submit 
        e.preventDefault() //Prevent form from submitting and refreshing page 
        const heroesCopy = [...this.state.heroes] //copies the hero array 
        heroesCopy.push( //pushes the new hero in the hero's copy 
            {hero: this.state.value, villan:'taxes'},
        )
        this.setState({ //changes the state!
          heroes:heroesCopy,
          value: '',
          placeholder: 'placeholder!!!!!!!'  
        })

    }
    toggleGameOver = () => {
        this.setState({ //toggles Game over
            gameOver: !this.state.gameOver
        })
        /*if(this.state.gameOver){
            this.setState({
                gameOver: false
            })
        } else {
            this.setState({
                gameOver: true
            })  
        }*/
        //!THE BANG

    }

    render(){
        const listItems = this.state.heroes.map((ourHero, index) => { //Loops through are heroes in our state 
            return (                     
                <li key={index} >
                    <h2>{ourHero.hero} VS {ourHero.villan}</h2>                
                    <button onClick={() => this.deleteHero(index)}> Delete Hero </button>
                    { ourHero.over ? 
                        <div>Winner is { ourHero.winner}</div>                    
                    :
                        <div>This game is not over</div>
                    }
                </li>
            )
        })        
        return(
            <div>

            { this.state.gameOver ? /*GAME OVER*/
                <h1> THIS GAME IS OVER </h1>
            : 
            /*GAME IS NOT OVER*/
                <div>
                    <ul>{listItems}</ul>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder={this.state.placeholder} value={this.state.value} onChange={(e) => this.handleChange(e)} />
                        <input type="submit" />
                    </form>
                </div>
        
            }
            <button onClick={this.toggleGameOver}>TOGGLE GAME</button>
             </div>



        )

    }

}
export default Lists

/*
                    {/*<button onClick={this.justSpawn}>SPAWN</button>

justSpawn = () => {            
        let spawn = [{hero:'spawn', villan:'THE VIOLATOR!'}]
        this.setState({
            heroes:spawn
        })
    }*/