import mongoose from "mongoose";
export const connectDb = ()=>{
    mongoose
  .connect(
    "mongodb+srv://3241rajeev:rajeevgoyal@cluster0.7nz6pqz.mongodb.net/"
  )
  .then(() => console.log("connection established!"))
  .catch((err) => console.log(err));

}
