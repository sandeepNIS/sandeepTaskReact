import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  Form,Formik, Field, } from "formik";
import { FormGroup, FormLabel } from "react-bootstrap";

export default function Example(props) {
    const username=props.username;
    const id=props.id;
    const email=props.email;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick=(e)=>{
    setShow(e.target.value);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} size="sm">
       U_info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hi! {username} your info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-wrapper">
        <Formik>
        <Form className='myform'>
		<FormGroup>
        <FormLabel>id</FormLabel>
			<Field name="id" type="number"
				className="form-control" value={id} onChange={handleClick}/>
		</FormGroup>
		<FormGroup>
        <FormLabel>Name</FormLabel>
			<Field name="username" type="text"
				className="form-control" value={username} onChange={handleClick}  />
		</FormGroup>
		<FormGroup>
        <FormLabel>email</FormLabel>
			<Field name="email" type="email"
				className="form-control" value={email} onChange={handleClick} />
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

