const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const WorkoutSchema = new Schema(
{
    day:
    {
        type: Date,
        unique: true
    },
    totalDuration: { type: Number },
    exercises: [ExerciseSchema]
});

WorkoutSchema.pre("save", function(next)
{
    let td = 0;

    console.log(this);

    this.totalDuration = td;

    next();
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = { Exercise, Workout };