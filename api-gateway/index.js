const express = require("express");
const cors = require("cors");
const gateway = require("fast-gateway");

const app = express();
app.use(cors());
const PORT = 9001;

// Middleware for protecting route for authorized user
const checkAuth = (req, res, next) => {
  if (req.headers.token && req.headers.token !== "") {
    next();
  } else {
    res.setHeader("Content-type", "application/json");
    res.statusCode = 401;
    res.end(JSON.stringify({ status: 401, message: "not authorized user!" }));
  }
};

const server = gateway({
  // middlewares: [checkAuth], //use middleware here for all routes
  routes: [
    {
      prefix: "/order", //any name you want in url
      target: "http://localhost:8081", //where you want to go
      // middlewares: [checkAuth], //use middleware in route for specific API
      methods: ["GET", "POST"], //use methods to use specific methods
      hooks: {},
    },
    {
      prefix: "/payment", //any name you want in url
      target: "http://localhost:8091", //where you want to go
      // middlewares: [checkAuth], //use middleware in route for specific API
      hooks: {},
    },
  ],
});

server.get("/", (req, res) => res.send("Gateway running!"));

server.start(PORT).then((res) => console.log(`Api gateway running on ${PORT}`));
