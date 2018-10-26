
const mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}

const drOrchid = 
{ 
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist",
}

// Characters Collection
var charactersArray = [mrGreen, drOrchid];



const weaponsArray = [
    {name: "rope",   weight: 10},
    {name: "knife",   weight: 8},
    {name: "candlestick",   weight: 2},
    {name: "dumbbell",   weight: 30},
    {name: "poison",   weight: 2},
    {name: "axe",   weight: 15},
    {name: "bat",   weight: 13},
    {name: "trophy",   weight: 25},
    {name: "pistol",   weight: 20}
]


const diningRoom = {name: "Dinning Room"}
const conservatory = {name: "Conservatory"}


var roomsArray = [];
roomsArray.push(diningRoom, conservatory)


function randomSelector(someArrayArg){
    let randomNumber = Math.floor(Math.random() * someArrayArg.length);
    return someArrayArg[randomNumber];
  }


  function pickMistery(){
      const mysteryEnvelope = [];

      mysteryEnvelope.push(randomSelector(charactersArray));
      mysteryEnvelope.push(randomSelector(weaponsArray));
      mysteryEnvelope.push(randomSelector(roomsArray));

      return mysteryEnvelope;
  }

  function revealMistery(mysteryEnvelope){
    return `${mysteryEnvelope[0].first_name} ${mysteryEnvelope[0].last_name} killed Mr.Boddy using the ${mysteryEnvelope[1].name} in the ${mysteryEnvelope[2].name}!!!!`
  }
  