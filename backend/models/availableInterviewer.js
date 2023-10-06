import { client } from "../helper/db.js";

class AvaiLableInterviewer {
  static async get(day) {
    const { rows } = await client.query(`
      SELECT
        appointment.id AS appointment_id,
        available_interviewer.id AS available_interviewer_id,
        interviewer.id AS interviewer_id,
        interviewer.interviewer_name,
        interviewer.interviewer_img
      FROM available_interviewer
      INNER JOIN appointment ON available_interviewer.appointment_id = appointment.id
      INNER JOIN interviewer ON available_interviewer.interviewer_id = interviewer.id
      INNER JOIN day ON appointment.day_id = day.id
      WHERE day.day_title = '${day}'
      AND available_interviewer.is_available = true
      ORDER BY available_interviewer.id ASC
    `);
    return rows;
  }
}

export default AvaiLableInterviewer;
