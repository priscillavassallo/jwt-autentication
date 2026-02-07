import "./App.css";
import { IoIosMail, IoIosLock } from "react-icons/io";

function App() {
  return (
    <div className="background">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="title">
            <p>CUSTOMER LOGIN</p>
          </div>
          <div className="box">
            <div className="user-box">
              <input type="text" required placeholder=" " />
              <label>
                <IoIosMail className="icon" /> <span>Email ID</span>
              </label>
            </div>
            <div className="user-box">
              <input type="password" required placeholder=" " />
              <label>
                <IoIosLock className="icon" /> <span>Password</span>
              </label>
            </div>
          </div>
          <div className="remember-forgot">
            <label className="remember">
              <input type="checkbox" />
              <span className="fake-checkbox"></span>
              <span>Remember me</span>
            </label>
            <div className="forgot">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
          <div className="login-button-box">
            <button className="login-button">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
