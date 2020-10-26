import React, {useState} from "react";
import { Link } from "@reach/router";
import "./SignIn.css"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

  return (
    <div className="Container-SignIn">
      <h1>Sign In</h1>
      <div className="Sign-In">
        {error !== null && <div>{error}</div>}
        <form>
            <div className="signInInput">
                <label htmlFor="userEmail" >
                    Email:
                </label>
                <input
                    type="email"
                    name="userEmail"
                    value = {email}
                    placeholder="E.g: faruq123@gmail.com"
                    id="userEmail"
                    onChange = {(event) => onChangeHandler(event)}
                />
          </div>
          <div className="signInInput">
                <label htmlFor="userPassword" >
                    Password:
                </label>
                <input
                    type="password"
                    name="userPassword"
                    value = {password}
                    placeholder="Your Password"
                    id="userPassword"
                    onChange = {(event) => onChangeHandler(event)}
                />
          </div>
          <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white">
          Sign in with Google
        </button>
        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;