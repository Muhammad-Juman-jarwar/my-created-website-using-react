import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";
import { useState, useEffect, useCallback } from "react";
import "./Signin.css";

const Signin = (props) => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

      // sending get request to the server named as firebase
      const loadedData = [];
      const fetchMoviesHandler = useCallback(async () => {
        const response = await fetch('https://mind-react-website-default-rtdb.firebaseio.com/userdata.json');
        const data = await response.json();
        for (const key in data) {
          loadedData.push({
            id: key,
            title: data[key].Username,
            email: data[key].email,
          });
        }
        console.log(data);
        const showUsername = loadedData.map((item) => item.title);
        setUserName(showUsername);
        const showEmail = loadedData.map((item) => item.email);
        setEmail(showEmail);
        console.log(showUsername);
        console.log(showEmail);
      }, []);
  
      useEffect(() => {
        fetchMoviesHandler();
      }, [fetchMoviesHandler]);

      const isEmail = (value) => {
        if(value.includes(email)){
          return isEmail ;
        }else {
          return !isEmail;
        }
      };
      const isUsername = (value) => {
        if(value.includes(userName)){
          return isUsername ;
        }else {
          return !isUsername;
        }
      };

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isUsername);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && emailIsValid) {
    formIsValid = true;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    };

    console.log("Submitted!");
    console.log(firstNameValue, emailValue);

    resetFirstName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError 
    ? "form-control invalid" 
    : "form-control";

  return (
    <div className='cBody'>
      <div className='app'>
        <div className='loginHeading'>
          <h2>Login Form</h2>
        </div>
        <form onSubmit={submitHandler}>
          <div className='control-group'>
            <div className={firstNameClasses}>
              <label htmlFor='name'>Username</label>
              <input
                type='text'
                id='name'
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && (
                <p className='error-text'>Please enter your Username.</p>
              )}
            </div>
          </div>
          <div className={emailClasses}>
            <label htmlFor='name'>E-Mail Address</label>
            <input
              type='text'
              id='name'
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className='error-text'>Please enter a valid email address.</p>
            )}
          </div>
          <div className='form-actions'>
            <button disabled={!formIsValid}>Sign In</button>
          </div>
        </form>
              <div className="Links">
              <div className="forgotpass">
                <a href=""><p>Forgot Password ?</p></a>
              </div>
              <div className="createaccount">
                <Link to="/signup"><p>Create Account</p></Link>
              </div>
              </div>
      </div>
    </div>
  );
};

export default Signin;
