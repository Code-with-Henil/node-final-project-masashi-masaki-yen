import express from "express";
import scheduleRouter from "./routes/scheduleRouter.js";
import daysRouter from "./routes/daysRouter.js";
const server = express();

const PORT = 3001;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
	console.log(`server listening on: http://${HOST}:${PORT}`);
});

server.use(express.json());

server.use("/schedule", scheduleRouter);
server.use("/days", daysRouter);
export default server;
