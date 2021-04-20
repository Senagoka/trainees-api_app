const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const traineesRoute = require("./routes/traineesRoute");
const usersRoute = require("./routes/usersroute");
const cors = require ("cors")

dotenv.config();

const app = express();

// connection
connectDB();

// middlwares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// route
app.use("/api/v1/trainee", traineesRoute);
app.use("/api/v1/users", usersRoute);

// home route
app.get("/", (req, res) => {
  res.send("<h1>wellcome to our trainees api site<h1>");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server started on port ${port}`));
