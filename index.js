const express = require("express");
const userRouter = require("./routers/user");
var AccessToken = require("twilio").jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;

var cors = require("cors");

require("dotenv").config();
require("./db/db");
const port = process.env.PORT;

const app = express();
app.use(cors());

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
