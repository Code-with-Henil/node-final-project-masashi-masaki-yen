import AppointmentModel from "../models/appointmentModel.js";
import ModifiedInterviewModel from "../models/modifyInterviewModel.js";
import DeleteModel from "../models/deleteModel.js";
import InterviewModel from "../models/interviewModel.js";
import AvaitableInterviewer from "../models/availableInterviewer.js";

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
        id: item.interview_id,
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

export const getAvaitableInterviewers = async (req, res) => {
  const { day } = req.params;
  const interviewers = await AvaitableInterviewer.get(day);

  const groupedData = {};

  interviewers.forEach((item) => {
    const { appointment_id, available_interviewer_id, interviewer_id, interviewer_name, interviewer_img } = item;

    if (!groupedData[appointment_id]) {
      groupedData[appointment_id] = [];
    }

    groupedData[appointment_id].push({
      id: interviewer_id,
      name: interviewer_name,
      avatar: interviewer_img,
    });
  });
  res.status(200).json(groupedData);
};

export const pushAppointment = async (req, res) => {
  try {
    const { interviewee_name, interviewer_id, appointment_id } = req.body;
    const interviews = await InterviewModel.pushAppointment(interviewee_name, interviewer_id, appointment_id);
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

  console.log("modified", modifyingAppointment);
  res.status(201).send("Modified Appointment successfully");
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    console.log("id does not match");
    res.status(404).send("Delete Appointment failed");
  } else {
    const deleteAppointment = await DeleteModel.deleteAppointment(id);
    console.log("delete", deleteAppointment);
    res.status(201).send("Delete Appointment successfully");
  }
};
