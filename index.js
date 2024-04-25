const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
dbConnect()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const userRoute = require('./routes/userRoute')
const eventRoute = require('./routes/eventRoute')

app.use('/api/user',userRoute)
app.use('/api/event',eventRoute)

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });