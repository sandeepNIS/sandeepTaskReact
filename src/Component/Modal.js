import React,{useState} from 'react';
// import ReactDOM from "react-dom/client";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  Form,Formik, Field, } from "formik";
import { FormGroup, FormLabel } from "react-bootstrap";
// import { propTypes } from 'react-bootstrap/esm/Image';

export default function Example(props) {
  // const [input,setInput] = useState({
  //    username:props.username,id:props.id, email:props.email
  // })
  // const previousInputValue = useRef("");

  // useEffect(() => {
  //   previousInputValue.current = input;
  // }, [input]);
  // const username=useRef(props.username);

  // useEffect(() => {
  //   input.username.current = input;
  // },[input]); 
    // const username=props.username;
    // const id=props.id;
    // const email=props.email;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleChange = (e) => {
  //   setUser((prev) => ({
  //     ...prev,
  //     [e.target.id]: e.target.value
  //   }));
  // };

  // const formOnChageHandler = (e) => {
  //   e.preventDefault();
  // };
  // const fromOnSubmitHandler = (e) => {
  //   e.preventDefault();
  // };

  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [id, setId] = useState(props.id);
  let userData = {
    name: name,
    email:email,
    id:id
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
    userData.name = e.target.value;
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    userData.email = e.target.value;
  };

  const idChangeHandler = (e) => {
    setId(e.target.value);
    userData.id = e.target.value;
  };

  const formOnChageHandler = (e) => {
    e.preventDefault();
    props.getData(userData);
    handleClose();
  };
  const fromOnSubmitHandler = (e) => {
    e.preventDefault();
  };

  // useEffect((e) => {
  //   setInput(e.target.value);
  // },[]);

  // const handleClick=(e)=>{
  //   setShow(e.target.value);
  // }
  // CONTROLLED COMPONENT 
  // const handleClick=(e)=>{
  //   setInput(e.target.value);
    
  //   }
    // const onSubmitForm = e => {
    //   e.preventDefault();
    //   alert(input.username);
    // };
  return (
    <>
      <Button  className="m-1 ms-0 mt-0 "  variant="primary" onClick={handleShow} size="sm">
       U_info 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Hi ! {name} your info...</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
        <div className="form-wrapper">
        <Formik >
        <Form className='myform'   onSubmit={fromOnSubmitHandler} >
		<FormGroup>
    {/* onChange={props.handleClicke} */}
        <FormLabel>id</FormLabel>
			<Field name="id" type="number"
				className="form-control" value={id}  onChange={idChangeHandler}/>
		</FormGroup>
		<FormGroup>
        <FormLabel>Name</FormLabel>
  {/* /CONTROLLED COMPONENT IT HAS CURRENT VALUE AS PROPS AND A CALLBACK FUNCTION handleClick USING onChange EVENT HANDLING */}
			<Field name="username" type="text"
				className="form-control" value={name}    onChange={nameChangeHandler}/>
		</FormGroup>
		<FormGroup>
        <FormLabel>email</FormLabel>
			<Field name="email" type="email"
				className="form-control" value={email}  onChange={emailChangeHandler}/>
		</FormGroup>
    <br></br>
    <Button  type="submit" variant="secondary" onClick={formOnChageHandler} >
            submit
          </Button>
		</Form>
        </Formik>
        </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          
        </Modal.Footer>
      </Modal>
      </>
  );
} 

// onChange={formOnChageHandler} onSubmit={fromOnSubmitHandler