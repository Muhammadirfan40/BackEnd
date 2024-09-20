
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({

    userid: {
        type: String,
        require: true
    },
    serialNumber: {
        type: Number,
        default: 0,
        unique: true
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



// Pre-save middleware to set the serialNumber
patientSchema.pre('save', async function(next) {
    if (this.isNew) {
        try {
            // Find the highest serial number
            const lastPatient = await this.constructor.findOne()
                .sort({ serialNumber: -1 })
                .select('serialNumber');

            // Set the serialNumber for the new document
            if (lastPatient) {
                this.serialNumber = lastPatient.serialNumber + 1;
            } else {
                this.serialNumber = 1; // Start with 1 if no documents exist
            }
            
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});



const PatientModel = mongoose.model("Patient", patientSchema);
module.exports = PatientModel;

