import { client } from "../helper/db.js";

class InterviewModel {
    static async pushAppointment(
        id,
        intervieweeName,
        interviewerId,
        appointmentId
    ) {
        try {
            const insertQuery =
                "INSERT INTO interview (id, interviewee_name, interviewer_id, appointment_id) VALUES ($1,$2,$3,$4)";
            const values = [id, intervieweeName, interviewerId, appointmentId];
            await client.query(insertQuery, values);
            return "Interview added successfully";
        } catch (err) {
            console.log("sth wrong");
            throw err;
        }
    }
}

export default InterviewModel;
