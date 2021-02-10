let mongoose = require("mongoose");
let db = require("../models");
const express = require("express");
const router = express.Router();

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

router.get('/seedplans', (req, res) => {
    db.Workout.create(workoutSeeder)
    .then(result => {
        console.log(result);
        res.send(result);
    })
    .catch(err => {
        res.send(err);
    })
})

let workoutSeeder = [
    {
        day: new Date(Date.now()),
        exercises: [
            {
                type: "Upper-Body",
                name: "Bench Press",
                weight: 120,
                reps: 5,
                sets: 5
            }
        ]
    },
    {
        day: new Date(Date.now()),
        exercises: [
            {
                type: "Upper-Body",
                name: "Bench Press",
                weight: 120,
                reps: 5,
                sets: 5
            }
        ]
    },
    {
        day: new Date(Date.now()),
        exercises: [
            {
                type: "Upper-Body",
                name: "Bench Press",
                weight: 120,
                reps: 5,
                sets: 5
            }
        ]
    },
    {
        day: new Date(Date.now()),
        exercises: [
            {
                type: "Upper-Body",
                name: "Bench Press",
                weight: 120,
                reps: 5,
                sets: 5
            }
        ]
    },
    {
        day: new Date(Date.now()),
        exercises: [
            {
                type: "Cardio",
                name: "Rowing",
                duration: 30,
                distance: 5

            }
        ]
    },
];

module.exports = router;