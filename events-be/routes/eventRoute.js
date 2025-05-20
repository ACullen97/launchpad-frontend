import express from "express"
import { addEvent } from "../controllers/eventController.js"
import multer from "multer"

const eventRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

eventRouter.post("/add", upload.single("image"), addEvent)



export default eventRouter;