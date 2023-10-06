import { client } from "../helper/db.js";

class ModifiedInterviewModel {
  static async putAppointment(id, interviewee_name, interviewer_id, appointment_id) {
    try {
      const { rows } = await client.query(
        "UPDATE interview SET interviewee_name = $1, interviewer_id = $2, appointment_id = $3 WHERE id = $4 RETURNING *",
        [interviewee_name, interviewer_id, appointment_id, id]
      );
      return rows;
    } catch (error) {
      console.log("error updating");
      throw error;
    }
  }
}

export default ModifiedInterviewModel;
