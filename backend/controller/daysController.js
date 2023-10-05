import DayModel from "../models/dayModel.js";

export const getDays = async (req, res) => {
  const days = await DayModel.get();
  res.json(days);
};
