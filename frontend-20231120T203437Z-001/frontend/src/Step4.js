import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navigationbar from './Navigationbar';
import './App.css';
import Validation from './LoginValidation'
import axios from 'axios'
export default function Step4() {
  const[values, setValues] = useState({
    yourname:'',
    youremail:''
  })
  const navigate = useNavigate(); 
  const [errors, setErrors] = useState({})
  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event) => {
  event.preventDefault();
  const err = Validation(values);
  setErrors(err);
  if(err.yourname === "" && err.youremail === ""){
    axios.post('http://localhost:8081/combine', values)
    .then(res => {
      navigate('/finalstep');
    })
    .catch(err => console.log(err));
  }
  const error = Validation(values);
  setErrors(err);
  if(err.company === "" && err.companyslogan === ""){
    axios.post('http://localhost:8081/step4', values)
    .then(res => {
      navigate('/finalstep');
    })
    .catch(err => console.log(err));
  }
}
  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
        <Navigationbar />
        <div className='question-div'>
        <h2>Fill In Details To Get It Moving</h2>
        <input type='name' onChange={handleInput} name='yourname' placeholder='Please Enter Your Name (Required)' className='input-question'></input>
        {errors.yourname && <span className='text-danger'> {errors.yourname}</span>}
        <br></br>
        <br></br>
        <input type='email' onChange={handleInput} name='youremail' placeholder='Please Enter Your Email (Required)' className='input-question'></input>
        {errors.youremail && <span className='text-danger'> {errors.youremail}</span>}
        </div>
        <div className='question-div2'>
            <hr></hr>
            <button type='submit' class="question-btn">SKIP</button>
            
        </div>
        </form>
    </div>
  )
}
