import express from "express";
import { getDays } from "../controller/daysController.js";

const daysRouter = express.Router();

daysRouter.get("/", async (req, res) => {
  getDays(req, res);
});

export default daysRouter;
