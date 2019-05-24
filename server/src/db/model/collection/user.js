import mongoose from "mongoose";

// import modelLib from '../lib';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true
    },
    userName: {
      type: String
    },
    contactNo: {
      type: Number
    }
  },
  { collection: "users", timestamps: true }
);

const account = mongoose.model("user", userSchema);

export default user;
