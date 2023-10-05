import { client } from "../helper/db.js";

class DeleteModel {
  static async deleteAppointment(id) {
    const { rows } = await client.query("DELETE FROM interview WHERE id = $1 RETURNING id", [id]);
    return rows;
  }
}

export default DeleteModel;
