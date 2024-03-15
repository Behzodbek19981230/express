require("dotenv").config();
const express = require("express");
const http = require("http");
const router = require("./app/routes");
const cors = require("cors");

const db = require("./config/db");
const server = express();
const PORT = process.env.PORT || 9300;

server.use(cors());
server.use(express.json());
server.use("/public", express.static(__dirname + "/public"));

server.use("/api", router);
server.get("/", (req, res) => {
  res.json({ info: "Server up and running" });
});

const start = async () => {
  try {
    db.sync();

    http.createServer(server).listen(PORT, () => {
      console.log(`SERVER RUNNING ON PORT ${PORT}`);
    });
  } catch (error) {
    console.log("An error occurred while connecting to the database:", error);
  }
};
start();
