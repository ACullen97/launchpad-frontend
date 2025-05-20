import eventModel from "../models/eventModel.js";
import fs from "fs";

//add event

const addEvent = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const event = new eventModel({
    name: req.body.name,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
    category: req.body.category,
    image: image_filename,
  })

  try {
    await event.save();
    res.json({success: true, message: "Event Added"})
  } catch (error) {
    console.log(error)
    res.json({success: false, message: "Error"})
  }


};

export { addEvent };
