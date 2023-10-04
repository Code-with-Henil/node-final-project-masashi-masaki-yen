import { client } from "../helper/db.js";

export const getAppointment = async (req, res) => {
	await client.connect();
	const { rows } = await client.query("SELECT * FROM appointment");
	console.log(rows);
	await client.end();
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
