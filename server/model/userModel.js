import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

  first: {
    type: String,
  },
  last: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: String,
  },
  age: {
    type: String,
  },
  dob: {
    type: String,
  },
  salary: {
    type: String,
  },
  adress: {
    type: String,
  },
});

export const userModel = mongoose.model("post", userSchema);
