const express = require('express');
const router  = express.Router();
const Task    = require('../models/Task');
// import the Task model so we can do Task.find, etc. 

/* GET home page */
    router.get('/tasks', (req, res, next) => {
        // remember this route is actually /api/tasks because we prefixed this entire file with /api 
        // in app.js line 58
        Task.find()
        .then((allTheTasks)=>{ 
            res.json(allTheTasks)
            // since this is an api, we will not be doing res.render or res.redirect
            // we will do res.json and then we will simply have to make sure we grab all that json from the react side   
        })
        .catch((err)=>{
            res.json(err);
        }) 
    });



    router.get('/task/details/:id', (req, res, next)=>{
        // since we are making this route unique by putting the word details in it, you do not need to worry about putting this route at the end of this file

        Task.findById(req.params.id)
        // grab the id from req.params and use it to find the task in the db
        .then((theTask)=>{
             res.json(theTask);  
            //  then we simple render json for all the info about that task  
        })
        .catch((err)=>{
            res.json(err); 
        })
    })



// typically in an express app, whenevr we want to create a new task or edit a task, usually the process involves 1 get route and 1 post route
// typically we have a get rotue where the user will see a form to fill in information
// and then that form will submit to a post route where we will receive all the information and then create a new task
// however, when making an api with the intention of building a react front-end, we only need 1 route, the post route
//  this is because, the first route - the get route, was only there to show an hbs file, but now, were not gonna have any hbs files
// instead the form that user will fill out will appear in the react app, and it will be our responsibility to create the react app such that
//  it can successfully make a post request using axios to the post route we are about to define right here
    

router.post('/tasks/add-new', (req, res, next)=>{
    Task.create({
        title: req.body.theTitle,
        // it will be our responsibility to make sure when we are building our react app that we design a page
        // that gives the user the ability to make a post request to http://localhost:3000/api/tasks/add-new
        // and we all will need to make sure when when we send this request from our react app that the user is able to send
        // 2 things in the body of the request, they need to be called theTitle and theDescription
        // this will be done with axios
        description: req.body.theDescription,
        owner: req.user._id
    })
    .then((response)=>{
        res.json(response);
    })
    .catch((err)=>{
        res.json(err);
    })
})


    router.post('/tasks/edit/:id', (req, res, next)=>{
        Task.findByIdAndUpdate(req.params.id, {
            title: req.body.theTitle,
            description: req.body.theDescription
        })
        .then((response)=>{
            if(response === null){
                res.json({message: 'sorry we could not find this task'})
                return;
            }
            // if there is no error but we are unable to find a task with that id, then the response we get rom DB will be equal to null
            // therefore, we can do an if statement that says if response === null give us a custom error message
            // because this situation will not result in an actual error

            res.json([{message: 'this task has been successfully updated'},
            response ])
            // res.json simply needs to take an array or object as the argument
            // it just happens that we usually pass it the thing we get back from the DB
            // however, you can put your own message in there if you want like so

        })
        .catch((err)=>{
            res.json(err)
        })
    })


    router.post('/tasks/delete/:id', (req, res, next)=>{
        Task.findByIdAndRemove(req.params.id)
        .then((deletedTask)=>{
            if(deletedTask === null){
                res.json({message: 'sorry this task could not be found'})
                return;
            } 

            res.json([
                {message: 'task succesfully deleted'},
                deletedTask
            ])
        })
        .catch((err)=>{
            res.json(err)
        })
    })







module.exports = router;