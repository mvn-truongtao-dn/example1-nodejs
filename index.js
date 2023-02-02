const express = require("express");
const userRouter = require("./routers/user");
require("dotenv").config();
require("./db/db");
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
