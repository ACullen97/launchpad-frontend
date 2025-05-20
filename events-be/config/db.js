import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://acullen97:Element1997!@cluster0.qie5phr.mongodb.net/launchpad-frontend').then(()=>console.log("DB Connected"))
}