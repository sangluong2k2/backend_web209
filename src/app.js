import express from "express"
import mongoose from "mongoose"

import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import authRouter from "./routes/auth";

import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api", productRouter)
app.use("/api", categoryRouter)
app.use("/api", authRouter)

mongoose.connect("mongodb://localhost:27017/asm_web209")
    .then(() => console.log("connect db thanh cong"))
    .catch((error) => console.log(error))
    
const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`)
}); 