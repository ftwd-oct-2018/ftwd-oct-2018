// var car = {
  //   name: 'Acura TL',
  //   isOn: false,
  //   color: 'white', 
  //   interiorColor: 'beige',
  //   interior: 'leather',
  //   rims: 20,
  //   sunroof: false,
  //   sport: true,
  
  //   sayMyName: function()  {
  //     console.log("My name is " + this.name);
  //   },
  
  //   start: function() {
  //     this.isOn = true;
  //   },
  
  //   stop: function() {
  //     this.isOn = false;
  //   }
  
  //   drive: function(){
  //     console.log("yay I'm driving");
  //   }
  // }
   
  // ^ this is syntax for making an actual object, but what if we want to make objects with similar structures?
  // we need to use classes/constructor functions



class Car{
    constructor(theName, color, sunroof){
      this.sunroof = sunroof;
      this.color = color;
      this.name = theName;
      this.wheels = 4;
      engine: true;
      isOn: false;
    }
  
    sayMyName(){
      console.log("My name is " + this.name);
    }
  
    start() {
      this.isOn = true;
    }
  
    stop() {
      this.isOn = false;
    }
  
    drive(){
      console.log("yay I'm driving");
    }
  
    letSomeoneIn(){
     if(this.passengers){
       this.passengers++
     }else{
       this.passengers = 1;
     }
    }
     
  }
  
  let theAcura = new Car('Acura TL', 'navy', false);
  // the keyword 'new' runs the constructor function of the class that comes after the word 'new'
  
  
  console.log(theAcura);
  theAcura.start()
  theAcura.letSomeoneIn()
  theAcura.letSomeoneIn()
  theAcura.letSomeoneIn()
  console.log(theAcura);
  
  
  
  
  
  
  
  
  
  
// lets take a look at how classes can inherit functions and attrributes from parent classes
  
  class Animal{

    constructor(name, age, kg){

    this.name = name;
    this.age = age;
    this.kg = kg;
    
  }

  breathe(){
    console.log("yup, I'm breathing");
  }

  eat(howMuch){
    this.kg += howMuch;
    console.log('i am eating, my new weight is '+ this.kg)
  }



}


// extends is a keyword that tells one class to inherit from another
class Dog extends Animal{
    constructor(theName, theAge, furColor, theWeight, howManyFeet){
    super(theName, theAge, theWeight)
    this.color = furColor;     
  }

  breathe(){
    super.breathe()
    console.log('*loud wet gross panting noises*')
  }


}






let luna = new Dog('Luna', 3, 'brown', 13);

// console.log(luna)

luna.breathe()
// luna.eat(0.1);
















class Store{

  constructor(){
    this.shoppingCart = [];
    
  }

  addToCart(productToAdd){
    this.shoppingCart.push(productToAdd);
  }

 

  calculatTotalPrice(){
    return this.shoppingCart.reduce((total, eachProduct)=>{
        return total + eachProduct.price
    },0)
  }

  completeOrder(){
    somePayPalMEthodThatWeIMportFromElseWhere( this.calculateTotalPrice() )
  }

}


let iphone = {name: 'iphone', price: 500}
let buildingCoGlass = {name: 'hipster glass from buildingCo', price: 7}
let tshirt = {name: 'tshirt', price: 20}



let theStore = new Store()
theStore.addToCart(iphone)
theStore.addToCart(buildingCoGlass)
theStore.addToCart(tshirt)
theStore.calculatTotalPrice()

console.log(theStore)

