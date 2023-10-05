import { client } from "../helper/db.js";

class ModifiedInterviewModel {
	async putAppointment() {
		const { rows } = await client.query(
			"UPDATE interview SET interviewee_name = $1, interviewer_id = $2, appointment_id = $3 WHERE id = $4 RETURNING *",
			[interviewee_name, interviewer_id, appointment_id, id]
		);
		return rows;
	}
}

export default ModifiedInterviewModel;
