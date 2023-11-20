// import React, { useState } from 'react'
// import {useNavigate} from 'react-router-dom'
// import Validation from './LoginValidation'
// import axios from 'axios'
// import './Form.css'
// export default function Form() {
//   const[values, setValues] = useState({
//     name:'',
//     email:'',
//     projectname:'',
//     message:''
//   })
//   const navigate = useNavigate(); 
//   const [errors, setErrors] = useState({})
//   const handleInput = (event) =>{
//     setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
//   }
//   const handleSubmit = (event) => {
//   event.preventDefault();
//   const err = Validation(values);
//   setErrors(err);
//   if(err.name === "" && err.email === "" && err.projectname === "" && err.message === ""){
//     axios.post('http://localhost:8081/custom_quote', values)
//     .then(res => {
//       navigate('/pricing');
//     })
//     .catch(err => console.log(err));
    
//   }
// }
//   return (
//     <div>
//     <div className='row m-0'>
//         <div className='column'>

//       <form action='' onSubmit={handleSubmit}>
//     <div className='input-form'>
//     <input onChange={handleInput} name='name' placeholder='Name*' className='text-area'></input>
//     {errors.name && <span className='text-danger'> {errors.name}</span>}
//     <br></br>
//     <br></br>
//     <input type='email' onChange={handleInput} name='email' placeholder='E-mail*' className='text-area'></input>
//     {errors.email && <span className='text-danger'> {errors.email}</span>}
//     <br></br>
//     <br></br>
//     <input onChange={handleInput} name='projectname' placeholder='Project Name*'className='text-area'></input>
//     {errors.projectname && <span className='text-danger'> {errors.projectname}</span>}
//     <br></br>
//     <br></br>       
//     <textarea onChange={handleInput} name='message' placeholder='Message*' type='text-area' className='large-text-area'></textarea>
//     {errors.message && <span className='text-danger'> {errors.message}</span>}
//     <br></br>
//     <br></br>
//     <button type='submit' class="question-btn">GET CUSTOM QUOTE</button>
//     </div>
//     </form>

//     </div>
//     <div className='column'>
    
//     </div>
    
//     </div>
    
        
    
//     </div>
//   )
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import './Form.css';

export default function Form() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    projectname: '',
    message: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (err.name === '' && err.email === '' && err.projectname === '' && err.message === '') {
      axios
        .post('http://localhost:8081/custom_quote', values)
        .then((res) => {
          navigate('/pricing');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="input-field"
            onChange={handleInput}
          />
          {errors.name && <span className="text-danger"> {errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="input-field"
            onChange={handleInput}
          />
          {errors.email && <span className="text-danger"> {errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="projectname">Project Name*</label>
          <input
            type="text"
            id="projectname"
            name="projectname"
            placeholder="Project Name"
            className="input-field"
            onChange={handleInput}
          />
          {errors.projectname && <span className="text-danger"> {errors.projectname}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="textarea-field"
            onChange={handleInput}
          />
          {errors.message && <span className="text-danger"> {errors.message}</span>}
        </div>
        <button type="submit" className="submit-button">
          GET CUSTOM QUOTE
        </button>
      </form>
    </div>
  );
}
