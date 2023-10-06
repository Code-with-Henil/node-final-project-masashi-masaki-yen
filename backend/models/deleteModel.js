import { client } from "../helper/db.js";

class DeleteModel {
  static async deleteAppointment(id) {
    try {
      const { rows } = await client.query("DELETE FROM interview WHERE appointment_id = $1 RETURNING id", [id]);
      return rows;
    } catch (error) {
      console.log("Error deleting");
      throw error;
    }
  }
}

export default DeleteModel;
