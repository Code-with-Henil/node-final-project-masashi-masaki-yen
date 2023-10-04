import { client } from "../helper/db.js";

class InterviewModel {
    async pushAppointment() {
        const { rows } = await client.query(
            "INSERT INTO appointment (interviewee_name)"
        );
        return rows;
    }
}

export default InterviewModel;
