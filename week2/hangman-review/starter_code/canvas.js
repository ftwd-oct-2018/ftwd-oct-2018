
class GameAnimator{

  constructor(){
    this.ctx = document.getElementById('theCanvas').getContext('2d');
    this.wrongLetterX = 900;
    this.wrongLetterY = 50;
  }

  drawLines(){
    let numberOfLines = this.wordToGuess.length;
    let x = 300;
    for(let i=0; i<numberOfLines; i++){
      this.ctx.lineWidth = 8;
      this.ctx.beginPath();
      this.ctx.moveTo(x, 300);
      this.ctx.lineTo(x + 50, 300);
      this.ctx.stroke();
      x+= 75;
    }
  }


  drawWrongLetter(whichLetter){
    this.ctx.font = '30px serif';
    this.ctx.fillText(whichLetter, this.wrongLetterX, this.wrongLetterY);
    this.wrongLetterX+= 50;
      if(this.wrongLetterX > 1100){
        this.wrongLetterY += 50;
        this.wrongLetterX = 900;
      }
  }


  drawCorrectLetter(whichLetter, indexes){
    console.log('correct guess')
    console.log(whichLetter);
    console.log(indexes);
    this.ctx.font = '30px serif';

    indexes.forEach((theIndex)=>{
      this.ctx.fillText(whichLetter, 310 + theIndex*75, 280)
    })



  }




}