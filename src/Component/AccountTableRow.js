import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

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
	</td>
	</tr>
);
};

export default AccountTableRow;
