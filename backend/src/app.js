const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const testConnectDb = async () => {
  const prisma = new PrismaClient();

  try {
    console.log("Connecting database...");
    if (prisma) console.log("Connect database success!");
  } catch (error) {
    console.log("Connect database failed!");
    console.error(error);
  }
};

testConnectDb();

module.exports = app;
