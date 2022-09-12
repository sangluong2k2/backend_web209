// import express from "express"
const express = require("express")
const mongoose = require("mongoose")

const productRouter = require('./routes/product');
const categoryRouter = require("./routes/category");
const authRouter = require("./routes/auth");
const cartRouter = require("./routes/cart");

const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter)
app.use("/api", cartRouter)

mongoose.connect("mongodb://127.0.0.1:27017/asm_web209")
    .then(() => console.log("connect db thanh cong"))
    .catch((error) => console.log(error))
    
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server running port ${process.env.PORT || 4000}`)
}); 