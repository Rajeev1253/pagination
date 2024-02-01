import { userModel } from "../model/userModel.js";
export const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      contact,
      age,
      dob,
      salary,
      adress,
      imageurl,
    } = req.body;
    const user = new userModel({
      firstName,
      lastName,
      email,
      contact,
      age,
      dob,
      salary,
      adress,
      imageurl,
    }).save();
    res.status(201).send({
      success: true,
      message: `user created sucessfully`,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      meessage: `error in cretaing user`,
      error,
    });
  }
};
export const getuser = async (req, res) => {
  try {
    // Adding Pagination
    const limitValue = req.query.limit || 2;
    const skipValue = req.query.page || 0;
    const posts = await userModel.find().limit(limitValue).skip(skipValue*limitValue);
    console.log(posts)
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
  }
};
export const updateuser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    // userModel.update({ id, }, { $set: {  } });
    const updated_user = userModel.findByIdAndUpdate(id, user);
    res.status(200).send("updated");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await userModel.findByIdAndDelete(id)
    res.status(201).send({
      success: true,
      message: `user deleted sucessfully`,
    });
  } catch (error) {
    console.log(error);
  }
};
