//Imports.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for the exercises.
const ExerciseSchema = new Schema(
{
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
});

//Schema for the workouts.
const WorkoutSchema = new Schema(
{
    day:
    {
        type: Date,
        unique: true
    },
    exercises: [ExerciseSchema]
});

//Virtual property for total duration.
WorkoutSchema.virtual("totalDuration").get(function ()
{
    let totalDuration = 0;
    for (x = 0; x < this.exercises.length; x++)
        totalDuration += this.exercises[x].duration;
    return totalDuration;
});

//Compile the schemas into models.
const Exercise = mongoose.model("Exercise", ExerciseSchema);
const Workout = mongoose.model("Workout", WorkoutSchema);

//Export the models.
module.exports = { Exercise, Workout };