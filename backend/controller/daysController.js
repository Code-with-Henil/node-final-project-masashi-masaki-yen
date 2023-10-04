import { client } from "../helper/db.js";

export const getDays = async (req, res) => {
	await client.connect();
	const { rows } = await client.query("SELECT * FROM appointment");
	await client.end();
	console.log(rows);
};
