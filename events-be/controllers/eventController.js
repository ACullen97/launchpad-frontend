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
  });

  try {
    await event.save();
    res.json({ success: true, message: "Event Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// All events

const listEvents = async(req, res) => {

  try {

    const events =  await eventModel.find({});
    res.json({success: true, data: events})
    
  } catch (error) {
    console.log(error);
    res.json({success: false, message:"Error"})
  }

}

// get single event

const getEvent = async (req, res) => {
    try {
      const event = await eventModel.findOne({_id: req.params.event_id});
       res.json({success:true, data: event})

    } catch (error) {
        console.log(error);
    res.json({success: false, message:`Error`})
    }
}


// remove event

const removeEvent = async(req, res) => {
  try {
    const event = await eventModel.findById(req.body.id);
      fs.unlink(`uploads/${event.image}`, ()=>{})
      await eventModel.findByIdAndDelete(req.body.id);
    res.json({success: true, message: "Event Removed"})
  } catch (error) {

  console.log(error);
  res.json({success: false, message: "Error"})
    
  }

}

export { addEvent, listEvents, getEvent, removeEvent };
