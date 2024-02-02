import React,{useState} from 'react'
import '../page/createuser.css'
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import './Update.css'

const Update = () => {
        const [first, setfirst] = useState();
        const [last, setlast] = useState();
        const [email, setemail] = useState();
        const [contact, setcontact] = useState();
        const [age, setage] = useState();
        const [dob, setdob] = useState();
        const [salary, setsalary] = useState();
        const [adress, setadress] = useState();
        const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
      
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
    
      const handleUpdate = ()=>{

      }
      
  return (
    <div className >
        <div className="box">
      <div className="heading">
          <h1>Update user</h1>
        </div>
        <div className='close'>
            <CloseIcon show={show} onHide={handleClose}/>
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
          <button onClick={handleUpdate}>Update</button>
          <Link to="/">
            <button>UserList</button>{" "}
          </Link>
        </div>
        
      </div>
      
      </div>
    
  )
}

export default Update