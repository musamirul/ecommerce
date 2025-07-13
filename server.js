const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB connected")).catch((err)=>console.error("Mongo error: ",err));

//Routes
app.use('/api/auth',require("./routes/auth"));
app.use('/api/products',require("./routes/products"));
app.use('/api/orders',require("./routes/orders"));

app.listen(process.env.PORT,()=>console.log("server runnning at http://localhost:${process.env.PORT}"));
