const router = require("express").Router();
const { Workout, Exercise } = require("../models/");

//get workouts.
router.get("/api/workouts", async (req, res) =>
{
    try
    {
        const workouts = await Workout.find({})//.populate("exercises");

        const exercises = await Exercise.find({});

        console.log(exercises);

        if (workouts)
            res.json(workouts);
        else
            res.json({ message: "No workouts found." });
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json(err);
    }
});

//add exercise
router.put("/api/workouts/:id", ({ body }, res) =>
{
    console.log(body);
});

//create workout
router.post("/api/workouts", (req, res) =>
{
    //TODO
});

//get workouts in range
router.get("/api/workouts/range", (req, res) =>
{
    //TODO
});

module.exports = router;