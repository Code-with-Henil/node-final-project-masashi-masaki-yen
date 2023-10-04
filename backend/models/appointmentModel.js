import { client } from "../helper/db.js";

class AppointmentModel {
  async getAppointment() {
    const { rows } = await client.query("SELECT * FROM appointment");
    return rows;
  }
}

export default AppointmentModel;
