import express from "express";
import scheduleRouter from "./routes/scheduleRouter.js";
const server = express();

const PORT = 3001;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
	console.log(`server listening on: http://${HOST}:${PORT}`);
});

server.use(express.json());

server.use("/days", scheduleRouter);

export default server;
