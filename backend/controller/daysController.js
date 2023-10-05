import DayModel from "../models/dayModel.js";

export const getDays = async (req, res) => {
  const DayModelInstance = new DayModel();
  const days = await DayModelInstance.get();
  res.json(days);
};
