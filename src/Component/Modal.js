import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  Form,Formik, Field, } from "formik";
import { FormGroup, FormLabel } from "react-bootstrap";

export default function Example(props) {
  const [input, setInput] = useState({
     username:props.username,id:props.id, email:props.email
  })
    // const username=props.username;
    // const id=props.id;
    // const email=props.email;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleClick=(e)=>{
  //   setShow(e.target.value);
  // }
  //CONTROLLED COMPONENT 
  const handleClick=(e)=>{
    setInput(e.target.value);
    e.preventDefault();
    }
  return (
    <>
      <Button variant="primary" onClick={handleShow} size="sm">
       U_info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hi ! {input.username} your info...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-wrapper">
        <Formik>
        <Form className='myform'>
		<FormGroup>
        <FormLabel>id</FormLabel>
			<Field name="id" type="number"
				className="form-control" value={input.id} onChange={handleClick}/>
		</FormGroup>
		<FormGroup>
        <FormLabel>Name</FormLabel>
  {/* /CONTROLLED COMPONENT IT HAS CURRENT VALUE AS PROPS AND A CALLBACK FUNCTION handleClick USING onChange EVENT HANDLING */}
			<Field name="username" type="text"
				className="form-control" value={input.username} onChange={handleClick}  />
		</FormGroup>
		<FormGroup>
        <FormLabel>email</FormLabel>
			<Field name="email" type="email"
				className="form-control" value={input.email} onChange={handleClick} />
		</FormGroup>
		</Form>
        </Formik>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

