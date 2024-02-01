import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  imagUrl:{
    type:String,
  },
  firstName:{
    type:String,
  },
  lastName:
  
    {
      type:String,
    },
  email:{
    type:String,
  },
contactNumber:
    {
      type:String,
    },
    age:{
      type:String,
    },
    dob:
      {
        type:String,
      },
      salary:{
        type:String,
      },
      adress:{
        type:String,
      }

    

});

export const userModel= mongoose.model("post", userSchema);
