import { client } from "../helper/db.js";

class AppointmentModel {
  static async getAppointment(day) {
    const { rows } = await client.query(`
      SELECT
        appointment.id AS appointment_id,
        CASE 
          WHEN EXTRACT(HOUR FROM appointment.schedule_time_from) >= 12 
            THEN TO_CHAR(appointment.schedule_time_from, 'FMHHam')
          ELSE TO_CHAR(appointment.schedule_time_from, 'FMHHpm')
        END AS time,
        interview.id AS interview_id,
        interview.interviewee_name AS interviewee_name,
        interviewer.id AS interviewer_id,
        interviewer.interviewer_name,
        interviewer.interviewer_img
      FROM appointment
      INNER JOIN day ON appointment.day_id = day.id
      LEFT JOIN interview ON appointment.id = interview.appointment_id
      LEFT JOIN interviewer ON interview.interviewer_id = interviewer.id
      WHERE day.day_title = '${day}'
      ORDER BY appointment.id ASC
    `);
    return rows;
  }
}

export default AppointmentModel;
