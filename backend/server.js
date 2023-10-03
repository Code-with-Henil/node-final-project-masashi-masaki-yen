import express from "express";
import scheduleRouter from "./routes/scheduleRouter.js";
const server = express();

const PORT = 8080;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`server listening on: http://${HOST}:${PORT}`);
});

server.use(express.json());

server.use("/", scheduleRouter);

export default server;
