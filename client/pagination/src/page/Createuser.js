import React, { useState } from "react";
import axios from "axios";
import "./createuser.css";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'

const Createuser = () => {
  const [first, setfirst] = useState();
  const [last, setlast] = useState();
  const [email, setemail] = useState();
  const [contact, setcontact] = useState();
  const [age, setage] = useState();
  const [dob, setdob] = useState();
  const [salary, setsalary] = useState();
  const [adress, setadress] = useState();

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
    };
    try {
      const response = await axios.post("http://localhost:4000/users", newUser);
      toast("user Created")
      
      console.log(response);
    
    } catch (error) {
      console.log("err", error.response.data);
    }
  };

  return (
    <div>
    <Toaster/>
      <div className="user-box">
      <div className="box">
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
         
        </div>
        <div className="buttons">
          <button onClick={handleSubmit}>Submit</button>
          <Link to="/">
            <button>UserList</button>{" "}
          </Link>
        </div>
        
      </div>
      
      </div>
    </div>
  );
};

export default Createuser;
