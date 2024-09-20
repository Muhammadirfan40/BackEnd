
const PatientModel = require("../Models/Patient.model")

const PatientRegister = async (req, res) => {

    try {

        const { cnic } = req.body;
        console.log(cnic)
        const already = await PatientModel.findOne({ cnic: cnic })

        console.log(already)

        if (already) {
            res.status(200).json({
                status: true,
                message: "Patient Already Registered !",
            })

        } else {
            const Patient = await PatientModel.create(req.body);
            res.status(200).json({
                status: true,
                message: "Patient Register Successfully !",
                Patient: Patient
            })

        }


    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status: true,
            message: "patient is not Register",
            error: error
        })

    }

};

const getAllPatient = async (req, res) => {

    try {

        const Patients = await PatientModel.find();
        res.status(200).json({
            status: true,
            message: "Patient Register Successfully !",
            Patients: Patients
        })

    } catch (error) {

        res.status(400).json({
            status: true,
            message: "patient is not Register",
            error: error
        })

    }

};

const getPatientbyid = async (req, res) => {
    try {
        const Patient = await PatientModel.findById(req.params.id );
       
        
        res.status(200).json({  
            status: true,
            message: "Patient Register Successfully !",
             Patient
        })

    } catch (error) {

        res.status(400).json({
            status: true,
            message: "patient is not Register",
            error: error
        })

    }

}

const EditPatient = async (req, res) => {

    try {

        const patientid = req.params.id

        const Patients = await PatientModel.findByIdAndUpdate(patientid, req.body, { new: true });
        res.status(200).json({
            status: true,
            message: "Patient update Successfully !",
            Patients: Patients
        })

    } catch (error) {

        res.status(400).json({
            status: true,
            message: "patient is not Update",
            error: error
        })

    }

};

const DeletePatient = async (req, res) => {

    try {

        const patientid = req.params.id

        const Patients = await PatientModel.findByIdAndDelete(patientid);
        res.status(200).json({
            status: true,
            message: "Patient Delete Successfully !",
            Patients: Patients
        })

    } catch (error) {

        res.status(400).json({
            status: true,
            message: "patient is not deleted",
            error: error
        })

    }

};

module.exports = {
    PatientRegister,
    getAllPatient,
    EditPatient,
    DeletePatient,
    getPatientbyid
};