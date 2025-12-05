import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartItems: { type: Object, default: {} },
  },
  {minimize: false} //tells Mongoose do not remove empty objects, keep them exactly as they are.
);

const User = mongoose.model("User", userSchema);
export default User;