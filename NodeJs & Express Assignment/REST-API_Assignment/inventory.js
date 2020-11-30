const express = require('express');
const mongoose = require('mongoose');
const app = express();

const routes = require('./routes/route');

app.use(routes);

const dbUrl = "mongodb+srv://Kartik:1234@cluster0.nvlfp.mongodb.net/rest-api-practice";
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(
  (result) => {
    app.listen(3000, ()=>{ console.log("running server at port 3000");})
  }
).catch((err) => console.log(err));
