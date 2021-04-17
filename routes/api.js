const router = require("express").Router();
const db = require("../models");

//get workouts.
router.get("/api/workouts", (req, res) =>
{
    //TODO
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