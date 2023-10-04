import pg from "pg";
import env from "dotenv";

env.config();

const { Client } = pg;

export const client = new Client({
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_USER_PASSWORD,
	port: process.env.DB_PORT,
});
