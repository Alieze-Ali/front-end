import React from 'react';
import * as yup from 'yup';

// Validation 
const formSchema = yup.object().shape({
    username: yup
        .string().min(6)
        .required('user name is required')
        .min(6, 'user name needs to be 6 chars min'),

    password: yup
        .string().min(6)
        .required('password is required')
        .min(6, 'password needs to be 8 chars minimum and include at least one special char')

})

const initialData = {
    username: "",
    password: "",
}

const initialErrors = {
    username: "",
    password: "", 
}

const OwnerLogin = () => {

    return (
        <div>
            <h1>Login Form</h1>
                <form>
                    <label>Username:</label>
                        <input type="text" name="username" value=" "></input>
                    <label>Password:</label>
                    <input type="password" name="password" value=" "></input>
                </form>
        </div>
    )
}

export default OwnerLogin;


