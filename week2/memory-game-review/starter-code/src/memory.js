

class MemoryGame{
  constructor(theArg){
    this.cards = theArg;
    this.currentHand = [];
    this.attempts = 0;
    this.score = 0;

    // this.shuffle();
  }

  shuffle() {
    let m = this.cards.length; 
    let t;
    let i;
  
    // While there remain elements to shuffle…
    while (m > 0) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    } 
  }


      evaluatePair(){
        this.attempts++;
        if(this.currentHand[0].attr('name') === this.currentHand[1].attr('name')){
          this.score++;
          this.currentHand = [];
          this.checkToSeeIfIWon();
          $('.back').removeClass('blocked');
        }else {
          setTimeout(()=>{ 
            this.currentHand[0].show();
            this.currentHand[1].show();
            this.currentHand[0].siblings().removeClass('back');
            this.currentHand[1].siblings().removeClass('back');
            this.currentHand = [];
            $('.back').removeClass('blocked');
          },800)
        }
      }


      checkToSeeIfIWon(){
        if(this.score === 12){
          setTimeout(()=>{
            alert('yay, you wom!');
          },1)
        }
      }





} 







