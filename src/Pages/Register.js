// CreateStudent Component for add new student

// Import Modules
import React, { useState} from "react";
import axios from 'axios';
import AccountForm from "../Component/AccountForm";

// CreateStudent Component
const Register = () => {
const [formValues, setFormValues] =
	useState({ username:'', email: '', password: '' })
// onSubmit handler
const onSubmit = studentObject => {
	axios.post(
'http://localhost:3080/account/addaccount',
	studentObject)
	.then(res => {
		if (res.status === 200){
			alert('Account successfully created')
			const { username, email, password } = res.data;
        setFormValues({ username, email, password });
		window.location.reload();
		}
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// useEffect(() => {
//     axios
//       .post(
        
//       )
//       .then((res) => {
//         const { username, email, password } = res.data;
//         setFormValues({ username, email, password });
//       })
//       .catch((err) => console.log(err));
//   }, []);


// Return student form
return(
	<AccountForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Account
	</AccountForm>
)
}

// Export CreateStudent Component
export default Register
