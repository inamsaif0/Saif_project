import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navigationbar from './Navigationbar';
import './App.css';
import Validation from './LoginValidation'
import axios from 'axios'
export default function Step4() {
  const[values, setValues] = useState({
    yourname:'',
    youremail:'',
    address:'',
    city:'',
    state:'',
    zip:'',
    cardname:'',
    cardnumber:''

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
    axios.post('http://localhost:8081/checkout', values)
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
        <br></br>
        <br></br>
        <input type='name' onChange={handleInput} name='address' placeholder='Address (Required)' className='input-question'></input>
        {errors.address && <span className='text-danger'> {errors.address}</span>}
        <br></br>
        <br></br>
        <input type='name' onChange={handleInput} name='city' placeholder='City' className='input-question'></input>
        {errors.city && <span className='text-danger'> {errors.city}</span>}
        <br></br>
        <br></br>
        <input type='name' onChange={handleInput} name='state' placeholder='State' className='input-question'></input>
        {errors.state && <span className='text-danger'> {errors.state}</span>}
        <br></br>
        <br></br>
        <input type='name' onChange={handleInput} name='zip' placeholder='Zip' className='input-question'></input>
        {errors.zip && <span className='text-danger'> {errors.zip}</span>}
        <br></br>
        <br></br>
        <input type='name' onChange={handleInput} name='cardname' placeholder='Card Name' className='input-question'></input>
        {errors.cardname && <span className='text-danger'> {errors.cardname}</span>}
        <br></br>
        <br></br>
        <input type='name' onChange={handleInput} name='cardnumber' placeholder='Card Number' className='input-question'></input>
        {errors.cardnumber && <span className='text-danger'> {errors.cardnumber}</span>}
        <br></br>
        <br></br>
        </div>


        <div className='question-div2'>
            <hr></hr>
            <button type='submit' class="question-btn">SKIP</button>
        </div>
        </form>
    </div>
  )
}
