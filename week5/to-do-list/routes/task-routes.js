
const express = require('express');
// we require express here because we literally use it in the next line to creat ehte router

const router  = express.Router();
// express.Router() creates an object that has a bunch of basically magical features
// with this object, you get methods like .get .post .put .patch .delete
// and they tell your app to sit there and wait for request that matches
// and then they run whatever code you write inside them (only when they get a request that matches)


const Task = require('../models/Task');
// by requiring in the Task model, I now have access to Task.find, Task.Create, Task.findByID, etc.


//router.get takes 2 arguments, the first argument is the url that were gonna sit around and wait for
//second argument is the function were gonna run when that happens
// and that function gets 3 magical arguments by default and those arugments give us mwthods like
// res.render and res.json res.redirect and req.params
    router.get('/tasks', (req, res , next)=>{
        Task.find()
        .then((allTheTasks)=>{
// the argument you put inside the .then is basically the same thing as saying const allTheTasks = the result of Task.find()
            res.render('task-list', {list: allTheTasks})
            // res.render takes a relative path to an hbs file so express knows, when someone goes to localhsot:3000/tasks
            // it will know which file to show them
            // and the relative path starts in the views folder because 
            // the object we pass in is just giving us access to that variables inside the hbs file
            // its basically like saying const list = allTheTasks and sending that variable to the view
        })
        .catch((err)=>{
            next(err);
            // next is a feature of the express router that looks at the next block of code in app.js and runs it
            //in this case, there is no block of code in app.js after this routes file
            //so in this case, it would send it to bin/www which is where our error and not found routes are
        })
    })



    router.post('/newtask', (req, res, next)=>{
// if we hard code all the values for a new task, the same task will get created anytime someone make sa request to this route
// because anytimes someone makes a request to this route, all the code in this block will execute
// however, the average person cannot make a request to this route, because most people dont have postman
// a post route is not readily accessible through the browser, so we have to devise a way to allow our users to make post requests easily
// the system that we have come up with to give our users this ability, without risking giving hem unlimited access
// is to creae form that when you submit it, it makes a psot request here, with very specific criteria so they can only send what we want them to send
// furthermore, the system we have devised to allow users to submit  post request using a form, also gives us the ability to save the info that they typed into the form
// because of this, we dont need to hard code in values like blah and wow, instead we can take those values from the form and use them inside the .create method
        // Task.create({
        //     title: 'blah', 
        //     content: 'wow'
        // })
// the name for that thing that gives us access to the info the user entered in the form is called req.body and its an object
        Task.create({
            title: req.body.title,
            content: req.body.content
        })
        .then(()=>{
            res.redirect('/tasks')
            // we always redirect after finished doing whatever we're doing in the post request
            // the reason we do this, is because if we res.render on this page, then the user can refresh the page and send the same post request again
            // if this happens, we can accidentally charge a credit card more than once, or someone can exploit it and hack us
        })
        .catch((err)=>{
            next(err);
        })

    })

    // this page is to show the user the form so that they can make a post request to the route above
    router.get('/addnewtask', (req, res, next)=>{
        res.render('new-task-view');
    })




    module.exports = router;