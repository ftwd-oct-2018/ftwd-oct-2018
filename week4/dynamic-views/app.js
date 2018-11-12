var express = require('express');
var app = express();
var hbs = require('hbs');
var PunkThing = require('punkapi-javascript-wrapper');
var punkApi = new PunkThing()

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');



app.get('/beers', (req, res, next)=>{

    punkApi.getBeers()
    .then((listOfBeers)=>{
        

        res.render('beers', {listOfBeers: listOfBeers})


    })


})







app.get('/', (req, res, next) => {

    let data = {name: "electric scooter",
    price: 300,
    specialDeal: "buy 1 get 1 free",
    // layout: false if you dont want the layout to apply to this page
}

    // if(data.secretWord === 'neptne'){
    //     data.isSecret = true
    // }
   
    
    res.render('blah', data )
});


app.get('/animals', (req, res, next)=>{

    let data = {list: ['dog', 'cat', 't-rex', 'crocodile', 'pangolin', 'scallop', 'crow']}



    res.render('animals', data)
})



app.get('/cars', (req, res, next)=>{

let data = {}
let blah = [
    {make: "BMW", model: "X3", hp: "300+", gasMileage: "not great"},
    {make: "Mercedes", model: "E Class", hp: "250+", gasMileage: "not great"},
    {make: "Nissan", model: "Leaf", hp: "not much", gasMileage: "n/a"},
    {make: "Acura", model: "TL", hp: "300+", gasMileage: "decent"},
    {make: "Jeep", model: "Wrangler", hp: "240", gasMileage: "horrific"},
    {make: "Cadillac", model: "Escalade", hp: "400+", gasMileage: "gallons per mile"},
    {make: "Honda", model: "Civc", hp: "110", gasMileage: "37"},
]
    data.cars = blah;

    res.render('cars', data)
})







app.listen(3000);