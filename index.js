
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoutes = require("./Routes/UserRoutes");
const PatientRoutes = require("./Routes/PatientRoutes")



require('dotenv').config()
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use("/api/user", UserRoutes);
app.use("/api/patient", PatientRoutes);




mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Zavia Foundation App is Running ...")
    })

})

