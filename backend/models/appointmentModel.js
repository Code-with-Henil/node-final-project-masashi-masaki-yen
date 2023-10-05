import { client } from "../helper/db.js";

class AppointmentModel {
  static async getAppointment() {
    const { rows } = await client.query("SELECT * FROM interview");
    return rows;
  }
}

export default AppointmentModel;
