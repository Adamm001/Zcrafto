import lock_icon from "../icons/lock.svg";
import loglogo from "../icons/LogLogo.png"
const SignUp = () => {
    return ( 
        <div className="signupBg">
            <div className="signUpCard">
                <div className="signUpLogoImg">
                    <img src={loglogo} alt="logo" />
                </div>
                <div className="signUpSection">
                    <div className="lock">
                        <img src={lock_icon} alt="lock" />
                        <p>SIGN UP</p>
                    </div>
                    <div className="inputSignUp">
                        <input type="text" placeholder="email" id="name" />
                        <input type="text" placeholder="name" id="name" />
                        <input type="password" placeholder="password" id="password" />
                        <input type="password" placeholder="password" id="password" />
                        <div className="check">
                            <input type="checkbox" />
                            <p>Remember me</p>
                        </div>
                        <button>Sign up</button>
                        <div className="forgot">
                            <p>i don't have an account</p> <p>forgot password</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;