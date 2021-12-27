import React, {useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import authConsts from "../../auth/authConsts";
import {localUrl} from "../../api/config";
import Cookies from "js-cookie";
import "./index.css";
import {doLogin} from "../../api/apis";

const EntryPage = (props) => {
  // const dispatch = useDispatch();
  // const token = useSelector((state) => {
  //   return state.authReducer.token;
  // });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const currentview = "logIn";

  const userChange = (e) => {
    setUsername(e.target.value);
  };

  const pwdChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    doLogin({
      username: username,
      password: password,
    })
      .then((res) => {
        Cookies.set("token", "ok", {expires: 7});
        window.location.href = `${localUrl}index/home`;
      })
      .catch((err) => {});
  };

  const currentView = () => {
    switch (currentview) {
      // case "signUp":
      //   return (
      //     <form>
      //       <h2>Sign Up!</h2>
      //       <fieldset>
      //         <legend>Create Account</legend>
      //         <ul>
      //           <li>
      //             <label for="username">Username:</label>
      //             <input type="text" id="username" required />
      //           </li>
      //           <li>
      //             <label for="email">Email:</label>
      //             <input type="email" id="email" required />
      //           </li>
      //           <li>
      //             <label for="password">Password:</label>
      //             <input type="password" id="password" required />
      //           </li>
      //         </ul>
      //       </fieldset>
      //       <button>Submit</button>
      //       <button type="button" onClick={() => this.changeView("logIn")}>
      //         Have an Account?
      //       </button>
      //     </form>
      //   );
      //   break;
      case "logIn":
        return (
          <div className="login-root">
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label>Username:</label>
                  <input
                    value={username}
                    onChange={userChange}
                    type="text"
                    required
                  />
                </li>
                <li>
                  <label>Password:</label>
                  <input
                    value={password}
                    onChange={pwdChange}
                    type="password"
                    required
                  />
                </li>
                {/* <li>
                  <i />
                  <a onClick={() => this.changeView("PWReset")} href="#">
                    Forgot Password?
                  </a>
                </li> */}
              </ul>
            </fieldset>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            {/* <button type="button" onClick={() => this.changeView("signUp")}>
              Create an Account
            </button> */}
          </div>
        );
      // case "PWReset":
      //   return (
      //     <form>
      //       <h2>Reset Password</h2>
      //       <fieldset>
      //         <legend>Password Reset</legend>
      //         <ul>
      //           <li>
      //             <em>A reset link will be sent to your inbox!</em>
      //           </li>
      //           <li>
      //             <label for="email">Email:</label>
      //             <input type="email" id="email" required />
      //           </li>
      //         </ul>
      //       </fieldset>
      //       <button>Send Reset Link</button>
      //       <button type="button" onClick={() => this.changeView("logIn")}>
      //         Go Back
      //       </button>
      //     </form>
      //   );
      default:
        break;
    }
  };

  return <section id="entry-page">{currentView()}</section>;
};

export default EntryPage;
