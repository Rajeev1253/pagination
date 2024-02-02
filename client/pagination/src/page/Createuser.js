import React, { useState } from "react";
import axios from "axios";
import "./createuser.css";

const Createuser = () => {
  const [first, setfirst] = useState();
  const [last, setlast] = useState();
  const [email, setemail] = useState();
  const [contact, setcontact] = useState();
  const [age, setage] = useState();
  const [dob, setdob] = useState();
  const [salary, setsalary] = useState();
  const [adress, setadress] = useState();
  const [imageurl, seturl] = useState();

  const handlefirst = (e) => {
    const value = e.target.value;
    setfirst(value);
  };
  const handlelast = (e) => {
    const value = e.target.value;
    setlast(value);
  };
  const handleemail = (e) => {
    const value = e.target.value;
    setemail(value);
  };
  const handlecontact = (e) => {
    const value = e.target.value;
    setcontact(value);
  };
  const handleage = (e) => {
    const value = e.target.value;
    setage(value);
  };
  const handledob = (e) => {
    const value = e.target.value;
    setdob(value);
  };
  const handlesalary = (e) => {
    const value = e.target.value;
    setsalary(value);
  };
  const handleadress = (e) => {
    const value = e.target.value;
    setadress(value);
  };
  const handleimage = (e) => {
    const value = e.target.value;
    seturl(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      first,
      last,
      email,
      contact,
      age,
      dob,
      salary,
      adress,
      imageurl,
    };
    try {
      const response = await axios.post("http://localhost:4000/users", newUser);
      console.log("user created sucessfully");
      console.log(response);
    } catch (error) {
      console.log("err", error.response.data);
    }
  };

  return (
    <div>
      <div className="user-box">
        <div className="heading">
          <h1>Create user</h1>
        </div>
        <div className="inputBox">
          <input
            className="firstName"
            placeholder="firstName"
            onChange={handlefirst}
          ></input>
          <input
            className="lastName"
            placeholder="lastName"
            onChange={handlelast}
          ></input>
          <input
            className="email"
            placeholder="email"
            onChange={handleemail}
          ></input>
          <input
            className="contactNo"
            placeholder="contacNo"
            onChange={handlecontact}
          ></input>
          <input className="age" placeholder="age" onChange={handleage}></input>
          <input className="dob" placeholder="dob" onChange={handledob}></input>
          <input
            className="salary"
            placeholder="salary"
            onChange={handlesalary}
          ></input>
          <input
            className="adress"
            placeholder="adress"
            onChange={handleadress}
          ></input>
          <input
            className="image url"
            placeholder="imageurl"
            onChange={handleimage}
          ></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Createuser;
