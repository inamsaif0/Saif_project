import React, { useState } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
const Login = () => {
const navigate=useNavigate();
const [values,setValues]=useState({
  email: "",
  password: "",
});


const [errorMsg, setErrorMsg]= useState("");
const [submitButtonDisabled, setSubmitButtonDisabled]=useState(false);
const handleSubmission = () => {
  if (!values.email || !values.password){
      setErrorMsg("Fill all the fields");
      return;
  }
  setErrorMsg("");

  setSubmitButtonDisabled(true);
  signInWithEmailAndPassword(auth,values.email,values.password)
  .then(async(res)=>{
      setSubmitButtonDisabled(false);
      
      navigate("/admin-panel");
  }
  ).catch((err)=>{
  setSubmitButtonDisabled(false);
  setErrorMsg(err.message);
  }); 
}
  return (
    <div className='container'>
        <div className='innerbox'>
      <h2>Login</h2>
      <br></br>
      <p>E-mail*</p>
      <input className='input-field'
        type="email"
        placeholder="Email"
        onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
        }
      />
      <br></br>
      <br></br>
      <p>Password*</p>
      <input className='input-field'
        type="password"
        placeholder="Password"
        onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
        }
      />
      <br></br>
      <br></br>
        <b>{errorMsg}</b>
        <div className='center-button'>
      <button className='question-btn'
      disabled={submitButtonDisabled}
      onClick={handleSubmission}>Login</button>
      </div>
      <br></br>
      <br></br>
      <p>Don't have an account?
        <span> <Link to='/signup'>Sign Up</Link></span>
      </p>
    </div>
    </div>
  );
};

export default Login;
