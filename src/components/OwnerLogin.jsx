import { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
// do I need anymore ???

// Validation 
const formSchema = yup.object().shape({
    username: yup
        .string().min(6)
        .required('Username is required')
        .min(6, 'Username needs to be 6 chars min'),

    password: yup
        .string().min(8)
        .required('Password is required')
        .min(8, 'Password needs to be 8 chars minimum and include at least one special char'),

});

const initialData = {
    username: "",
    password: "",
}

const initialErrors = {
    username: "",
    password: "", 
}

const OwnerLogin = () => {

    // setting state ??? do i need anymore ???
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(true);

    // handles form Submission refresh prevention ???
    const onSubmit = (event) => {
        event.preventDefault();
        formSubmit();
    };

    // handles sending & receiving ???
    const formSubmit = () => {
        axios
        .then( res => {
            console.log(res)
        })
        .catch( err => console.log("Error, err"))
    };

    // handles form 
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData(initialData)

    }

    // this enables submit button when info is entered - at least it's supposed to ???
    useEffect(()=> {
        formSchema.isValid(formData)
            .then(valid => setDisabled(!valid))
    }, [formData])


    return (
        <form onSubmit={submitHandler}>
            <h1>Login Form</h1>
                
                    <label>Username:</label>
                        <input 
                            id="" 
                            type="text" 
                            name="username" 
                            value={formData.username}
                            onChange="" /><br/>
                    
                    <label>Password:</label>
                        <input 
                            id="" 
                            type="password" 
                            name="password" 
                            value={formData.password}
                            onChange="" />
                    
                    <div><br/>
                        <button 
                            id="" 
                            type="submit" 
                            name="submit" 
                            disabled={disabled}>Submit
                            </button>
                    </div>
        </form>
        
        
    )
}

export default OwnerLogin;


