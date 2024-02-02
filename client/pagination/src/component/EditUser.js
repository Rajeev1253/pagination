import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import toast, { Toaster } from 'react-hot-toast'
function EditUser({ userData }) {

  const [show, setShow] = useState(false);
  const [first, setfirst] = useState(userData.first);
  const [last, setlast] = useState(userData.last);
  const [email, setemail] = useState(userData.email);
  const [contact, setcontact] = useState(userData.contact);
  const [age, setage] = useState(userData.age);
  const [dob, setdob] = useState(userData.dob);
  const [salary, setsalary] = useState(userData.salary);
  const [adress, setadress] = useState(userData.adress);

 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate = async () => {
    try{
    axios.patch(`http://localhost:4000/users/${userData._id}`, {
      first: first,
      last: last,
      email: email,
      contact: contact,
      age: age,
      dob: dob,
      salary: salary,
      adress: adress,
    });
    toast.success("user updated")

  }
  catch(error){
    toast.error("Error in updation")

  }
  };

  return (
    <>
    <Toaster/>
      <Button onClick={handleShow}>Edit</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                value={first}
                autoFocus
                onChange={(e) => {
                  setfirst(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                value={last}
                onChange={(e) => {
                  setlast(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Conatct</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                value={contact}
                onChange={(e) => {
                  setcontact(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>age</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                value={age}
                onChange={(e) => {
                  setage(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>D.O.B</Form.Label>
              <Form.Control
                type="dob"
                placeholder="name@example.com"
                autoFocus
                value={dob}
                onChange={(e) => {
                  setdob(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="salary"
                placeholder="name@example.com"
                autoFocus
                value={salary}
                onChange={(e) => {
                  setsalary(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Adress</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={adress}
                onChange={(e) => {
                  setadress(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUser;
