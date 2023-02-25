const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/contacts", require("./routes/contactsRoute"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
