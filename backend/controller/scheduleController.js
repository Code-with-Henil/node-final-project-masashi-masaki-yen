import { client } from "../helper/db.js";

await client.connect();

export const getAppointment = async (req, res) => {
  const { rows } = await client.query("SELECT * FROM appointment");
  console.log(rows);
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
