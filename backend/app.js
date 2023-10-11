import server from "./server.js";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(server);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const PORT = 8080;
const HOST = "localhost";

httpServer.listen(PORT, HOST, () => {
  console.log(`server listening on: http://${HOST}:${PORT}`);
});

io.on("connection", (socket) => {
  console.log("A client has connected");

  socket.on("book_interview", (data) => {
    socket.broadcast.emit("book_interview", data);
  });

  socket.on("delete_interview", (data) => {
    socket.broadcast.emit("delete_interview", data);
    console.log("delete_interview", data);
  });

  socket.on("disconnect", () => {
    console.log("A client has disconnected");
  });
});
