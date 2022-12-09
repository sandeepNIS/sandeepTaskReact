import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormLabel, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


const AccountForm = (props) => {
const validationSchema = Yup.object().shape({
	username: Yup.string().required("Required"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Required"),
	password: Yup.string().required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
        <center>
           
		<Form>
		<FormGroup>
        <FormLabel>Name</FormLabel>
			<Field name="username" type="text"
				className="form-control autofocus" />
			<ErrorMessage
			name="username"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br></br>
		<FormGroup>
        <FormLabel>Email</FormLabel>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br></br>
		<FormGroup>
        <FormLabel>Password</FormLabel>
			<Field name="password" type="password"
				className="form-control" />
			<ErrorMessage
			name="password"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <br></br>
		<Button variant="danger" size="sm"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
        </center>
	</Formik>
	</div>
);
};

export default AccountForm;