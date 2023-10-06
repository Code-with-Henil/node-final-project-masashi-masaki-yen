import { client } from "../helper/db.js";

class InterviewModel {
  static async pushAppointment(interviewee_name, interviewer_id, appointment_id) {
    try {
      const insertQuery = `INSERT INTO interview (interviewee_name, interviewer_id, appointment_id) VALUES ($1,$2,$3) RETURNING *`;
      const values = [interviewee_name, interviewer_id, appointment_id];
      const { rows } = await client.query(insertQuery, values);
      return rows;
    } catch (err) {
      console.log("sth wrong");
      throw err;
    }
  }
}

export default InterviewModel;
