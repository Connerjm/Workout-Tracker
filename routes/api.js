const router = require("express").Router();
const db = require("../models");

//get workouts.
router.get("/api/workouts", async (req, res) =>
{
    try
    {
        const workouts = await db.Workout.find({}).populate("exercises");

        if (workouts)
            res.json(workouts);
        else
            res.json({ message: "No workouts found." });
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

//add exercise
router.put("/api/workouts/:id", (req, res) =>
{
    //TODO
});

//create workout
router.pust("/api/workouts", (req, res) =>
{
    //TODO
});

//get workouts in range
router.get("/api/workouts/range", (req, res) =>
{
    //TODO
});

module.exports = router;