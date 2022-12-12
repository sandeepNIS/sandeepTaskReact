import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Example from "./Modal";

const AccountTableRow = (props) => {
const { id, username, email} = props.obj;

const deleteAccount = () => {
	axios
	.delete(
"http://localhost:3080/account/delete/" + id)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{username}</td>
	<td>{email}</td>
	<td>
		<Button onClick={deleteAccount}
		size="sm" variant="danger">
		Delete
		</Button>
		<hr></hr>
		{/* <br></br><br></br> */}
	<Example username={username}
	id={id}
	email={email}/>
	</td>
	
	</tr>
	
	
);
};

export default AccountTableRow;