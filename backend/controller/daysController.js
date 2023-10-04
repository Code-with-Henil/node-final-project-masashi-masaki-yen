import { client } from "../helper/db.js";

export const getDays = async (req, res) => {
  const { rows } = await client.query("SELECT * FROM appointment");
  console.log(rows);
};
