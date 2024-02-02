import React, { useEffect, useState } from "react";
import "../component/userlist.css";
import axios from "axios";
import { Link } from "react-router-dom";
import EditUser from "./EditUser";


const UserList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setdata] = useState();
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(3);

  const fetchdata = async () => {
    console.log("hello");
    const response = await axios.get("http://localhost:4000/users");
    setdata(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const handlePrev = async () => {
    if ((page-1)> 0) {
      setPage(page - 1);
      const response = await axios.get(
        `http://localhost:4000/users?page=${page-1}&limit=${limit}`
      );
      setdata(response.data);
    }
  };
  const handleNext = async () => {
    if (data != "") {
      const response = await axios.get(
        `http://localhost:4000/users?page=${page+1}&limit=${limit}`
      );
      setdata(response.data);
      setPage(page + 1);
    }
  };
  const handleDelete = async (id) => {
    const itemdel = await axios.delete(`http://localhost:4000/users/${id}`);
    fetchdata();
  };
  const handleSubmit = async () => {
    const response = await axios.get(
      `http://localhost:4000/users?limit=${limit}`
    );
    setdata(response.data);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setlimit(value);
  };
  const handleEdit = async ()=>{
    fetchdata();


  }


  // console.log(data)

  return (
    <div className="table-main">
      <div className="table-header">
        <div className="logo1">User  List</div>
        <div className="status">
        </div>
      </div>
      <div className="table-box">
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Salary</th>
            <th colSpan={2}>Changes</th>
          </tr>

          {data?.map((user) => {
            return (
              <tr className="rows">
                <td>{user.first}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.salary}</td>
                <td>
                <EditUser userData={user} onClick={handleEdit}/>
                </td>
                <td>
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
        
      </div>
      <div className="bottom">
      <div className="">
        <Link to="/create"><button>Add User</button> </Link>
      </div>
      <div className="pagination">
        <button onClick={handlePrev}>Prev</button>
        <span>{page}</span>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="input-box">
            <lable>No of cols</lable>

            <input value={limit} onChange={handleChange}></input>
            <button onClick={handleSubmit}>Submit</button>
          </div>


      </div>
       

   
    </div>
  );
};

export default UserList;
