import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import Navigationbar from './Navigationbar';
import './App.css';
import Validation from './LoginValidation'
import axios from 'axios'
export default function Step1() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialData = queryParams.get('data');

  const [data] = useState(initialData);


  const[values, setValues] = useState({
    company: initialData || '',
    companyslogan:'',
  })

  useEffect(() => {
    const newdata = queryParams.get('data');
    if (newdata !== values.company) {
      setValues((prevValues) => ({
        ...prevValues,
        company: newdata,
      }));
    }
  }, [location.search, values.company]);
  const navigate = useNavigate(); 
  const [errors, setErrors] = useState({})
  const handleInput = (event) =>{
    setValues((prev) => ({...prev, [event.target.name]: event.target.value}));
  }
  const handleSubmit = (event) => {
  event.preventDefault();
 
  const err = Validation(values);
  setErrors(err);
  if(err.company === "" && err.companyslogan === ""){
    axios.post('http://localhost:8081/step1', values)
    .then(res => {
      console.log(res,'hello')
      navigate('/step2');
    })
    .catch(err => console.log(err));
  }
  
}


  return (
    <div>
        <Navigationbar />
        <form action='' onSubmit={handleSubmit}>
        <div className='question-div'>
        <h2>Fill Out Your Details</h2>
        <input
  type='text'
  name='company'
  placeholder='Company Name'
  className='input-question'
  value={values.company || data || ''}
  onChange={handleInput}
/>        {/* <input  onChange={handleInput} name='company' placeholder='Company Name' className='input-question'></input> */}
        <br></br>
        {errors.company && <span className='text-danger'> {errors.company}</span>}
        <br></br>
        <br></br>
        <input type='companyslogan' onChange={handleInput} name='companyslogan' placeholder='Company Slogan' className='input-question'></input>
        <br></br>
        {errors.companyslogan && <span className='text-danger'> {errors.companyslogan}</span>}
        </div>  
        <div className='question-div2'>
            <hr></hr>
            <button type='submit' className="question-btn">GET IN TOUCH</button>
        </div>
        </form>
    </div>
  )
}



