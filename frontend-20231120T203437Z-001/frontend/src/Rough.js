import React from 'react'
import ButtonAppBar from './components/Navbar'
export default function Rough() {
  return (
    <div>
        <a href="#" className='btn btn-link' data-Toggle='collapse' data-target='showSpending'>Click</a>
        <div className='collapse' id='showSpending'> this is div</div>
      </div>       
       
  )
}
