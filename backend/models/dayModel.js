import { client } from "../helper/db.js";

class DayModel {
  async get() {
    const { rows } = await client.query(`
        SELECT day.id, day.day_title, COUNT(available_interviewer.id) AS spots FROM day
        LEFT JOIN appointment ON day.id = appointment.day_id
        LEFT JOIN available_interviewer ON appointment.id = available_interviewer.appointment_id AND available_interviewer.is_available = true
        GROUP BY day.id, day.day_title
        ORDER BY day.id ASC;
    `);
    return rows;
  }
}

export default DayModel;
