import AppointmentModel from "../models/appointmentModel.js";
import ModifiedInterviewModel from "../models/modifyInterviewModel.js";
import DeleteModel from "../models/deleteModel.js";
import InterviewModel from "../models/interviewModel.js";

export const getAppointment = async (req, res) => {
  const { day } = req.params;
  const appointments = await AppointmentModel.getAppointment(day);
  const formattedData = {};

  appointments.forEach((item) => {
    const id = item.appointment_id.toString();
    const time = item.time;

    formattedData[id] = { id: item.appointment_id, time };

    if (item.interview_id !== null) {
      formattedData[id].interview = {
        student: item.interviewee_name,
        interviewer: {
          id: item.interviewer_id,
          name: item.interviewer_name,
          avatar: item.interviewer_img,
        },
      };
    }
  });
  res.status(200).json(formattedData);
};

export const pushAppointment = async (req, res) => {
  try {
    const { intervieweeName, interviewerId, appointmentId } = req.body;
    const interviews = await InterviewModel.pushAppointment(intervieweeName, interviewerId, appointmentId);
    console.log("interviews", interviews);
    res.status(201).send("Appointment pushed successfully");
  } catch (error) {
    console.error("Error pushing appointment:", error);
    res.status(500).send("Error pushing appointment");
  }
};

export const putAppointment = async (req, res) => {
  const { id } = req.params;
  const { interviewee_name, interviewer_id, appointment_id } = req.body;
  const modifyingAppointment = await ModifiedInterviewModel.putAppointment(id, interviewee_name, interviewer_id, appointment_id);

  console.log(modifyingAppointment);
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  const deleteAppointment = await DeleteModel.deleteAppointment(id);
  console.log(deleteAppointment);
};
