import AppointmentModel from "../models/appointmentModel.js";
import InterviewModel from "../models/interviewModel.js";

export const getAppointment = async (req, res) => {
    const appointments = await AppointmentModel.getAppointment();
    console.log(appointments);
    res.send("getAppointment");
};

export const pushAppointment = async (req, res) => {
    try {
        const { intervieweeName, interviewerId, appointmentId } = req.body;
        const interviews = await InterviewModel.pushAppointment(
            intervieweeName,
            interviewerId,
            appointmentId
        );
        console.log("interviews", interviews);
        res.status(201).send("Appointment pushed successfully");
    } catch (error) {
        console.error("Error pushing appointment:", error);
        res.status(500).send("Error pushing appointment");
    }
};

export const putAppointment = async (req, res) => {
    res.send("putAppointment");
};

export const deleteAppointment = async (req, res) => {
    const { id } = req.params;
    const deleteAppointment = await AppointmentModel.deleteAppointment(id);
    console.log(deleteAppointment);
};
