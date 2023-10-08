import server from "./server.js";

const PORT = 3001;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`server listening on: http://${HOST}:${PORT}`);
});
