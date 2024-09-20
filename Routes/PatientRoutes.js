
const express = require("express");
const Router = express.Router();
const { PatientRegister, getAllPatient, EditPatient, DeletePatient,getPatientbyid } = require("../Controller/Patient.Controller");



Router.post("/register", PatientRegister);
Router.get("/getallpatient", getAllPatient);
Router.get("/byid/:id", getPatientbyid)
Router.put("/update/:id", EditPatient);
Router.delete("/delete/:id", DeletePatient);





module.exports = Router;