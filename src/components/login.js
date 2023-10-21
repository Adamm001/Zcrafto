import { useState } from "react";
import lock_icon from "../icons/lock.svg";
import loglogo from "../icons/LogLogo.png"
const Login = ({users}) => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const nameInputChange = (event) => {
        setName(event.target.value);
    };
    const passInputChange = (event) => {
        setPass(event.target.value);
    };
    

  return (
    <div className="signupBg">
      <div className="card">
        <div className="lock">
          <img src={lock_icon} alt="lock" />
          <p>LOGIN</p>
        </div>
        <div className="inputLogin">
          <input value={name} onChange={nameInputChange} type="text" placeholder="name" id="name" />
          <input value={pass} onChange={passInputChange} type="password" placeholder="password" id="password" />
          <div className="check">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          
          <button>Login </button>
          <div className="forgot">
            <p>i don't have an account</p> <p>forgot password</p>
          </div>
        </div>
      </div>
      <div className="signinLogoImg">
        <img src={loglogo} alt="logo" />
      </div>
    </div>
  );
};

export default Login;
