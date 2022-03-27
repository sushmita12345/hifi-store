import "./signup.css";
import {useState} from 'react'
import axios from "axios";

export function Signup() {

    const [signupForm, setSignupForm] = useState({firstName: "", lastName: "", email: "", password: ""})

    const submitHandler = async (e)  => {
        e.preventDefault();
        try {
            const {status, data: {encodedToken}} = await axios.post(`/api/auth/signup`, signupForm
            // JSON.stringify({
            // firstName: "Sushmita1",
            // lastName: "Gupta1",
            // email: "sush1@gmail.com",
            // password: "sushmita1234",
            // })
            );
            // saving the encodedToken in the localStorage
            
            localStorage.setItem("signupToken", encodedToken);
        } catch (error) {
            console.log(error);
        }        
        
    }
       
    return (
        <div class="login-container">
            <div class="login-container-wrapper">
                <h2 class="login-page">Signup</h2>
                <form onSubmit={(e) => submitHandler(e)}>
                    <div class="form-info">
                        <label class="login-text" htmlFor="email">FirstName:</label>
                        <input class="login-box"
                            type="text" 
                            value={signupForm.firstName} 
                            required
                            placeholder="Enter FirstName"
                            onChange={(e) => setSignupForm((prev) => ({...prev, firstName: e.target.value}))}
                            />

                        <label class="login-text" htmlFor="email">LastName:</label>
                        <input class="login-box"
                            type="text" 
                            value={signupForm.lastName}
                            required
                            placeholder="Enter LastName"
                            onChange={(e) => setSignupForm((prev) => ({...prev, lastName: e.target.value}))}
                        />

                        <label class="login-text" htmlFor="email">Email address:</label>
                        <input class="login-box"
                            type="text" 
                            value={signupForm.email} 
                            required
                            placeholder="Enter email"
                            onChange={(e) => setSignupForm((prev) => ({...prev, email: e.target.value}))}
                        />

                        <label class="login-text" htmlFor="password">Password:</label>
                        <input class="login-box" 
                            type="password" 
                            value={signupForm.password}
                            required
                            placeholder="Enter Password"
                            onChange={(e) => setSignupForm((prev) => ({...prev, password: e.target.value}))}
                        />
                        

                    </div>
                    
                    <div class="pwd-remember">
                        <div class="rem-container">
                            <input class="login-checkbox" type="checkbox" required/>
                            <span class="login-remember">I accept all Terms & Conditions</span>
                        </div>
                    </div>
                    <button class="login-btn" type="submit">Login</button>
                    <p class="login-account">Already have an Account</p>
                    
                </form> 
            </div>
        </div>
    );
}
