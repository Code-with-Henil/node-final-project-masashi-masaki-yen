import AppointmentModel from "../models/appointmentModel.js";
import ModifiedInterviewModel from "../models/modifyInterviewModel.js";
export const getAppointment = async (req, res) => {
	const appointments = await AppointmentModel.getAppointment();
	console.log(appointments);
	res.send("getAppointment");
};

export const pushAppointment = async (req, res) => {
	res.send("pushAppointment");
};

export const putAppointment = async (req, res) => {
	const { id } = req.params;
	const { interviewee_name, interviewer_id, appointment_id } = req.body;
	const modifyingAppointment = await ModifiedInterviewModel.putAppointment(
		id,
		interviewee_name,
		interviewer_id,
		appointment_id
	);

	console.log(modifyingAppointment);
};

export const deleteAppointment = async (req, res) => {
	res.send("deleteAppointment");
};
