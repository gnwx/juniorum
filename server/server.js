require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const companyRoutes = require("./routes/company");
const postsRoutes = require("./routes/posts");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/company", companyRoutes);
app.use("/api/posts", postsRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
