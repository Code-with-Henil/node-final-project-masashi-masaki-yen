import pg from "pg";

export const { Client } = pg;

const client = new Client({
	user: "user",
	host: "localhost",
	database: "postgres",
	password: "password",
	port: 5432,
});
