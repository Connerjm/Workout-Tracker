const router = require("express").Router();
const { Workout, Exercise } = require("../models/");

//get workouts.
router.get("/api/workouts", async (req, res) =>
{
    try
    {
        const workout = await Workout.findOne({}).sort({ _id: -1 }).limit(1);

        let totalDuration = 0;
        workout.exercises.forEach(e => {totalDuration += e.duration;});

        if (workout)
            res.json([{ _id: workout._id, day: workout.day, exercises: workout.exercises, totalDuration }]);
        else
            res.json({ message: "No workout found." });
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

//add exercise
router.put("/api/workouts/:id", async ({ params, body }, res) =>
{
    try
    {
        const workout = await Workout.findOneAndUpdate(
            { _id: params.id },
            { $push: { exercises: await Exercise.create(body) } },
            { new: true });

        if (workout)
            res.json(workout);
        else
            res.json({ message: "No workout found with that id."});
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

//create workout
router.post("/api/workouts", async (req, res) =>
{
    try
    {
        const workout = await Workout.create({ day: new Date() });

        if (workout)
            res.json(workout);
        else
            res.json({ message: "Create failed." });
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

//get workouts in range
router.get("/api/workouts/range", async (req, res) =>
{
    try
    {
        const workouts = await Workout.find({}).limit(7);

        if (workouts)
            res.json(workouts);
        else
            res.json({ message: "No workouts found within range." });
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

module.exports = router;