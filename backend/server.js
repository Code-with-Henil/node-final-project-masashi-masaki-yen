import express from "express";
import scheduleRouter from "./routes/scheduleRouter.js";
import daysRouter from "./routes/daysRouter.js";
import { client } from "./helper/db.js";
const server = express();

const PORT = 3001;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`server listening on: http://${HOST}:${PORT}`);
});

server.use(express.json());

server.use("/schedule", scheduleRouter);
server.use("/days", daysRouter);

try {
  await client.connect();
  console.log("Connected to the database");
} catch (error) {
  console.log("Failed to connect to the database");
}

export default server;
