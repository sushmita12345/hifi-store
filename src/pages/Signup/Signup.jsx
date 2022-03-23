import "./signup.css"

export function Signup() {
    return (
        <div class="login-container">
            <div class="login-container-wrapper">
                <h2 class="login-page">Signup</h2>
                <form>
                    <div class="form-info">
                        <label class="login-text" for="email">Email address:</label>
                        <input class="login-box" type="text" value="sush@neoG" />
                        <label class="login-text" for="password">Password:</label>
                        <input class="login-box" type="password" value="sushmita" />
                    </div>
                    
                    <div class="pwd-remember">
                        <div class="rem-container">
                            <input class="login-checkbox" type="checkbox" />
                            <span class="login-remember">I accept all Terms & Conditions</span>
                        </div>
                    </div>
                    <button class="login-btn">Login</button>
                    <p class="login-account">Already have an Account</p>
                    
                </form> 
            </div>
        </div>
    );
}
