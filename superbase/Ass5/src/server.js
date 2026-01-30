import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"
import todoRoutes from "./routes/todoRoutes.js"

dotenv.config()
const app=express();
app.use(express.json());
app.use("/api/users",userRoutes);
app.use("/api/todos",todoRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})