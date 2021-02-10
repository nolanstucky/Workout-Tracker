const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    Workoutname: String,

    password: {
        type: string
    },
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout;

