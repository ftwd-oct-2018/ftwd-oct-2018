let theGame;


class Hangman{
  constructor(){
    this.potentialWords = ['innovation', 'passion', 'sriracha'];
    this.secretWord = "";
    this.correctGuesses = [];
    this.incorrectGuesses = [];
    this.errorsLeft = 10;
    this.getWord();
  }

  getWord(){
    let randomNumber = Math.floor(Math.random()*this.potentialWords.length);
    this.secretWord = this.potentialWords[randomNumber];
  }

  checkIfThisThingIsALetter(thisThing){
    if(thisThing.keyCode >= 65 && thisThing.keyCode <= 90){
      return true;
    }
    return false;
  }

    evaluateGuess(theGuess){
      if(!this.checkIfThisThingIsALetter(theGuess)){
        console.log('not a letter');
        return;
      }

      if(this.correctGuesses.includes(theGuess.key) || this.incorrectGuesses.includes(theGuess.key) ){
        console.log('you already guessed that letter');
        return;
      }


      if(this.secretWord.includes(theGuess.key)){
        this.correctGuesses.push(theGuess.key);
        this.checkWinner();
      }else{
        this.incorrectGuesses.push(theGuess.key);
        this.errorsLeft--;
        this.checkGameOver();
      }
    }

    checkGameOver(){
      if(this.errorsLeft <1){
        alert('you lose');
      }
    }

    checkWinner(){
      let secretArray = this.secretWord.split('').filter((letter, i)=>{
        return this.secretWord.split('').indexOf(letter) === i;
      })
      if(secretArray.sort().join('') === this.correctGuesses.sort().join('')){
        alert('you win');
      }
    }




}



document.getElementById('start-game-button').onclick = function () {
  theGame = new Hangman();
};


document.onkeydown = function (e) {
  if(theGame){
    theGame.evaluateGuess(e);
  }
};
