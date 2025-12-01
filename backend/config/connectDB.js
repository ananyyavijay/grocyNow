 import mongoose, {mongo} from "mongoose";

 export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongoDB connected");
    } catch (error) {
        console.log("error connecting mongoDB: ", error);
        process.exit(1); //exit the process with failure
    }
 };