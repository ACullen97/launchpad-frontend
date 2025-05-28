import express from "express";
import cors from "cors"; 
import { connectDB } from "./config/db.js";
import eventRouter from "./routes/eventRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// API endpoints
app.use("/api/event", eventRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)



app.get("/", (req, res) =>{

    res.send("API running successfully")

})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://acullen97:<db_password>@cluster0.qie5phr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0