import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {

  const navigate = useNavigate()

  function NavToPage(url)
  {
    navigate(url)
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Place : Lucknow
      </p>

      <button onClick={()=>NavToPage('/')}>Go to Home</button>
      <button onClick={()=>NavToPage('/contact')}>Go to Contact</button>
    </div>
  )
}
