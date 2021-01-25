require("dotenv").config();

const express = require("express");
const app = express();
const example = require("./routes/example");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

async function start() {
  try {
    const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hp1wx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.use("/", example);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
