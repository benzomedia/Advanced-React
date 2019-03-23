require("dotenv").config({ path: ".env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

//TODO use express middlware to handle cookies
//TODO use express middlware to populate current server

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
