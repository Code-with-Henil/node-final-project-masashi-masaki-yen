import express from "express";
import {
    getAppointment,
    pushAppointment,
    putAppointment,
    deleteAppointment,
} from "../controller/scheduleController.js";
import InterviewModel from "../models/interviewModel.js";

const scheduleRouter = express.Router();

scheduleRouter.get("/", async (req, res) => {
    console.log("scheduleRouter");
    getAppointment(req, res);
});

scheduleRouter.post("/", async (req, res) => {
    console.log("interviewTesting");
    try {
        const { id, intervieweeName, interviewerId, appointmentId } = req.body;
        const interviews = await InterviewModel.pushAppointment(
            id,
            intervieweeName,
            interviewerId,
            appointmentId
        );
        console.log(interviews);
        res.status(201).send("Appointment pushed successfully");
    } catch (error) {
        console.error("Error pushing appointment:", error);
        res.status(500).send("Error pushing appointment");
    }
    // pushAppointment(req, res);
});

scheduleRouter.put("/:id", async (req, res) => {
    putAppointment(req, res);
});

scheduleRouter.delete("/:id", async (req, res) => {
    deleteAppointment(req, res);
});

export default scheduleRouter;
