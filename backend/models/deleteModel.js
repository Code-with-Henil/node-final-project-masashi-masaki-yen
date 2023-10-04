import { client } from "../helper/db.js";

class deleteModel {
	async deleteAppointment(id) {
		const { rows } = await client.query("DELETE FROM products WHERE id = $1 RETURNING id", [id]);
		return rows;
	}
}

export default deleteModel;
