import DayModel from "../models/dayModel.js";

export const getDays = async (req, res) => {
  const days = await DayModel.get();
  const formatedData = {};
  days.forEach((day) => {
    formatedData[day.day_title] = day;
  });
  res.json(formatedData);
};
