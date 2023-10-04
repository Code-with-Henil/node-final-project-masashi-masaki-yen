import AppointmentModel from "../models/appointmentModel.js";

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
  res.send("deleteAppointment");
};
