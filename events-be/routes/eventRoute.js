import express from "express"
import { addEvent, listEvents, getEvent, removeEvent } from "../controllers/eventController.js"
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
eventRouter.get("/list", listEvents)
eventRouter.get("/:event_id", getEvent)
eventRouter.post("/remove", removeEvent)



export default eventRouter;