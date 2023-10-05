import { client } from "../helper/db.js";

class DayModel {
  async get() {
    const { rows } = await client.query(`
    SELECT 
        day.id,
        day.day_title,
        (
            SELECT COUNT(appointment.id) - COUNT(interview.id) 
            FROM appointment 
            LEFT JOIN interview ON appointment.id = interview.appointment_id
            WHERE appointment.day_id = day.id
        ) as spots
    FROM day;
    `);
    return rows;
  }
}

export default DayModel;
