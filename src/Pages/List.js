import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
// import '../Component/RespTable.css';
import AccountTableRow from "../Component/AccountTableRow";
// import ModalList from "../Component/Modal2";

const List = () => {
const [accounts, setAccounts] = useState([]);

// const handleClicko=(e)=>{
//     setAccounts(e.target.value);
//     // e.preventDefault();
//     }
	
useEffect(() => {
	axios
	.get(`http://localhost:3080/account/list`)
	.then(({ data }) => {
		setAccounts(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);
//handleClicko={handleClicko} 
const DataTable = () => {
	return accounts.map((res, i) => {
	return <AccountTableRow obj={res} key={i}   />;
	});
};

return (


	<div  className="table-wrapper table-responsive table-responsive{-sm|-md|-lg|-xl}   overflow-x:auto;" >
		{/* //table-responsive size="sm" */}
	<Table className="table" striped bordered hover table responsive size="sm" w-auto >
		<thead>
		{/* onClick={<ModalList/>} */}
		<tr >
			<th> Name </th>
			<th> Email </th>
			<th> Action </th>
			
			
		</tr>
		</thead>
		<tbody>{DataTable()}
		</tbody>
	</Table>
	</div>
);
};

export default List;
