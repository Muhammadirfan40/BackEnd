
const express = require("express");
const Router = express.Router();
const { PatientRegister, getAllPatient, EditPatient, DeletePatient } = require("../Controller/Patient.Controller");



Router.post("/register", PatientRegister);
Router.get("/getallpatient", getAllPatient);
Router.put("/update/:id", EditPatient);
Router.delete("/delete/:id", DeletePatient);





module.exports = Router;