import express from "express";
import {
  getAppointment,
  pushAppointment,
  putAppointment,
  deleteAppointment,
  getAvaitableInterviewers,
} from "../controller/scheduleController.js";

const scheduleRouter = express.Router();

scheduleRouter.get("/:day", async (req, res) => {
  getAppointment(req, res);
});

scheduleRouter.get("/interviewers/:day", async (req, res) => {
  getAvaitableInterviewers(req, res);
});

scheduleRouter.post("/", async (req, res) => {
  console.log("interviewTesting");
  pushAppointment(req, res);
});

scheduleRouter.put("/:id", async (req, res) => {
  putAppointment(req, res);
});

scheduleRouter.delete("/:id", async (req, res) => {
  deleteAppointment(req, res);
});

export default scheduleRouter;
