import { userModel } from "../model/userModel.js";
export const createUser = async (req, res) => {
  try {
    const { first, last, email, contact, age, dob, salary, adress, imageurl } =
      req.body;
    const user = new userModel({
      first,
      last,
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
    const page = req.query.page;
    const limitValue = req.query.limit * 1 || 10;
    const skipValue = (page - 1) * limitValue || 0;

    const posts = await userModel
      .find()
      .limit(limitValue)
      .skip(skipValue * limitValue);
    console.log(page + limitValue + skipValue);
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
    await userModel.findByIdAndDelete(id);
    res.status(201).send({
      success: true,
      message: `user deleted sucessfully`,
    });
  } catch (error) {
    console.log(error);
  }
};
