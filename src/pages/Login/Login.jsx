import {Link} from "react-router-dom";
import "./login.css"

export function Login() {
    return (
        <div class="login-container">
        <div class="login-container-wrapper">
            <h2 class="login-page">Login</h2>

            <form>
                <div class="form-info">
                    <label class="login-text" htmlFor="email">Email address:</label>
                    <input class="login-box" type="text" value="sush@neoG" />
                    <label class="login-text" for="password">Password:</label>
                    <input class="login-box" type="password" value="sushmita" />
                </div>
                
                <div class="pwd-remember">
                    <div class="rem-container">
                        <input class="login-checkbox" type="checkbox" />
                        <span class="login-remember">Remember me</span>
                    </div>
                    
                    <span class="login-forget">Forget your password?</span>
                </div>
                <button class="login-btn">Login</button>
                <Link to="/signup"><span class="login-account">Create New Account</span></Link>
                
            </form> 
        </div>
    </div>
    )
}