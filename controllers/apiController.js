const express = require("express");
const router = express.Router();
const db = require("../models");
const workouts = [];

router.get('/', function (req, res, next) {
    res.render('home')
})

router.get('/workout', function (req, res, next) {
    db.Workout.find({day: "Monday"})
    .then(dbWorkout => {
        workouts.push(dbWorkout)
        console.log(dbWorkout)
        // const obj = { workouts: dbWorkout}
        // res.render('workout', obj)
    })
    .then(test =>{
    const obj = {workouts};
    console.log(obj);
    res.render('workout', obj)
    })
    
})

router.post('/api/workout', (req, res) => {
    console.log(req.body)

    // db.workouts.insert(req.body, (error, data) => {
    //     if (error) {
    //         res.send(error);
    //     } else {
    //         res.send(data);
    //     }
    // })
})

module.exports = router;