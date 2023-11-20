import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Navigationbar from './Navigationbar'
import Accordion from './Accordion'
import { Link } from 'react-router-dom'
import Footer2 from './Footer2'
import Validation from './LoginValidation'
import axios from 'axios'
export default function Contact() {
  const[values, setValues] = useState({
    name:'',
    email:'',
    projectname:'',
    message:''
  })
  const [message, setMessage]=useState('');
  const navigate = useNavigate(); 
  const [errors, setErrors] = useState({})
  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event) => {
  event.preventDefault();
  const err = Validation(values);
  setErrors(err);
  if(err.name === "" && err.email === "" && err.projectname === "" && err.message === ""){
    axios.post('http://localhost:8081/contact', values)
    .then(res => {
      navigate('/about');
    })
    .catch(err => console.log(err));
  }
}
  return (
    <div>
        <Navigationbar/>    
        <div className="background-container">
        <img src={require(`./images/aboutUs.webp`)} className="background-image"/>
      <div className="text-overlay2">
        <h1>Let’s Discuss Your Digital Dream!</h1>
        <h5>Talk to us now and see your dreams come to life in no time!</h5>
      </div>
    </div>
    <div style={{textAlign:'center'}}>
        
        <p>CONTACT US</p>
        <h1>Tell Us What You Have In Your Mind</h1>
        <h5>Get in touch with us and we promise you won't regret it. We have helped hundreds of brands to get the limelight of the digital world.</h5>
    </div>
    <br></br>

    <div className='row m-0'>
    <div className='column'>
    <img src={require(`./images/chat-support.png`)} className="customer-support"/>
    
    </div>
    <div className='column'>
    <p>24/7 SUPPORT</p>
    <h1>We Are Always Here For You!</h1>
    <h5>With our quality service, you also get 24/7 customer support. Our account men are trained to answer your every query. Get in touch and let’s conquer the digital universe together.</h5>
    <br></br>
    <p>Our Address</p>
    <p>info@seoinsighterx.com</p>
    <p>929-322-1108</p>
    </div>
    </div>
    <div className='row m-0'>
        <div className='column'>

      <form action='' onSubmit={handleSubmit}>
    <div className='input-form'>
    <input onChange={handleInput} name='name' placeholder='Name*' className='text-area'></input>
    {errors.name && <span className='text-danger'> {errors.name}</span>}
    <br></br>
    <br></br>
    <input type='email' onChange={handleInput} name='email' placeholder='E-mail*' className='text-area'></input>
    {errors.email && <span className='text-danger'> {errors.email}</span>}
    <br></br>
    <br></br>
    <input onChange={handleInput} name='projectname' placeholder='Project Name*'className='text-area'></input>
    {errors.projectname && <span className='text-danger'> {errors.projectname}</span>}
    <br></br>
    <br></br>       
    <textarea onChange={handleInput} name='message' placeholder='Message*' type='text-area' className='large-text-area'></textarea>
    {errors.message && <span className='text-danger'> {errors.message}</span>}
    <br></br>
    <br></br>
    <button type='submit' class="question-btn">GET IN TOUCH</button>
    </div>
    </form>

    </div>
    <div className='column'>
    <Accordion />
    </div>
    
    </div>
    <Footer2 />
        
    
    </div>
  )
}
