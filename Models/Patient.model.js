
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({

    userid: {
        type: String,
        require: true
    },

    name: {
        type: String,
        require: true
    },

    dob: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },

    phone: {
        type: String,
        require: true
    },
    cnic: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },

    maritalStatus: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    roomnumber: {
        type: String,
        require: true
    },

}, { timestamps: true });

const PatientModel = mongoose.model("Patient", patientSchema);
module.exports = PatientModel;

