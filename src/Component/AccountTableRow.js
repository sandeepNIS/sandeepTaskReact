import React,{useState} from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Example from "./Modal";

const AccountTableRow = (props) => {
// const { id, username, email} = props.obj;
// const [ino, setIno] = useState(props.obj);

const [name, setName] = useState(props.obj.username);
const [email, setEmail] = useState(props.obj.email);
const [id, setId] = useState(props.obj.id);

let userData = (data) => {
    setName(data.name);
    setEmail(data.email);
	setId(data.id);
  };

// const [user, setUser] = useState({
//     name: props.obj.username,
//     email: props.obj.email,
// 	id:props.obj.id
//   });

// const handleClicke=(e)=>{
//     setIno(e.target.value);
//     e.preventDefault();
//     }

const deleteAccount = () => {
	axios
	.delete(
"http://localhost:3080/account/delete/" +id)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};
// const DataTable1 = () => {
// 	return ino.map((res, i) => {
// 	return <Example obj={res} key={i} onChange={handleClicke} />;
// 	});
// };


return (
	
	<tr>
	{/* <td>{ino.username}</td> */}
	<td>{name}</td>
	<td>{email}</td>
	{/* <td>{ino.email}</td> */}
	<td>
		<Button onClick={deleteAccount}
		size="sm" variant="danger">
		Delete
		</Button>
		{/* <hr></hr> */}
		{/* <br></br><br></br> */}
	<Example 
	//  handleClicke={handleClicke}
	//  handleClickj={props.handleClicko}
	name={name}
	id={id}
	email={email}

	getData={userData}
	// user={user} setUser={setUser}
	 />
  {/* {DataTable1()} */}
  
	</td>
	
	</tr>
	
	
);
};

export default AccountTableRow;