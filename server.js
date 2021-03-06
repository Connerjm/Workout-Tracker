//Imports.
const express = require("express");
const mongoose = require("mongoose");

//Set port.
const PORT = process.env.PORT || 8008;

//Create server.
const app = express();

//Set middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Set mongoose connection.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
{
    //Required to eliminate deprecated errors.
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//Routes.
app.use(require("./routes/api.js"));

//Start server.
app.listen(PORT, () =>
{
    console.log(`App running on port ${PORT}!`);
});