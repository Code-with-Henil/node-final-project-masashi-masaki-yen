import AppointmentModel from "../models/appointmentModel.js";
import DeleteModel from "../models/deleteModel.js";

export const getAppointment = async (req, res) => {
	const appointments = await AppointmentModel.getAppointment();
	console.log(appointments);
	res.send("getAppointment");
};

export const pushAppointment = async (req, res) => {
	res.send("pushAppointment");
};

export const putAppointment = async (req, res) => {
	res.send("putAppointment");
};

export const deleteAppointment = async (req, res) => {
	const { id } = req.params;
	const deleteAppointment = await DeleteModel.deleteAppointment(id);
	console.log(deleteAppointment);
};
