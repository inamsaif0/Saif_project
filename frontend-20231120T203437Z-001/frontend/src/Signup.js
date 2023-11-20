import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
const Signup = () => {
  const navigate=useNavigate();
  const [values,setValues]=useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg]= useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled]=useState(false);
  const handleSubmission = () => {
    if (!values.name || !values.email || !values.password){
        setErrorMsg("Fill all the fields");
        return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth,values.email,values.password)
    .then(async(res)=>{
        setSubmitButtonDisabled(false);
        const user =res.user;
        await updateProfile(user, {
            displayName:values.name,
        });
        navigate("/admin-panel");
    }
    ).catch((err)=>{
    setSubmitButtonDisabled(false);
    setErrorMsg(err.message);
    }); 
  };
  
  return (
    <div className='container'>
  <div className='innerbox'>
    <h2>Sign Up</h2>
    <br></br>
    <p>Name*</p>
    <input
      className='input-field'
      type="name"
      placeholder="Name"
      onChange={(event) =>
        setValues((prev) => ({ ...prev, name: event.target.value }))
      }
    />
    <br></br>
    <br></br>
    <p>E-mail*</p>
    <input
      className='input-field'
      type="email"
      placeholder="Email"
      onChange={(event) =>
        setValues((prev) => ({ ...prev, email: event.target.value }))
      }
    />
    <br></br>
    <br></br>
    <p>Password*</p>
    <input
      className='input-field'
      type="password"
      placeholder="Password"
      onChange={(event) =>
        setValues((prev) => ({ ...prev, password: event.target.value }))
      }
    />
    <br></br>
    <br></br>
    <b>{errorMsg }</b>
    <br></br>
    <br></br>
    <div className='center-button'>
      <button
        disabled={submitButtonDisabled}
        onClick={handleSubmission}
        className='question-btn'
      >
        Sign Up
      </button>
    </div>
    <br></br>
    <br></br>
    <p>Already have an account?
      <span> <Link to='/login'>Login</Link></span>
    </p>
  </div>
</div>

  );
};

export default Signup;
