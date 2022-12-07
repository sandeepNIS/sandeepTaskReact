// import React from 'react'  
// class Register extends React.Component {  
//   render() {  
//     return <h1>Register</h1>  
//   }  
// }  
// export default Register 

// CreateStudent Component for add new account

// Import Modules
import React, { useState } from "react";
import axios from 'axios';
import AccountForm from "../Component/AccountForm";

// CreateAccount Component
const Register = () => {
const [formValues] =
	useState({ name: '', email: '', password: '' })
// onSubmit handler
const onSubmit = accountObject=> {
	axios.post(
`http://localhost:3080/account/addaccount`,
	accountObject,{
        headers: {
            "Content-Type": "multipart/form-data",
          },
    })
	.then(res => {
		if (res.status === 200)
		alert('account successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return Account form
return(
	<AccountForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Account
	</AccountForm>
)
}

// Export CreateAccount Component
export default Register
