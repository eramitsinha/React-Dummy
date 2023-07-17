import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  
  const navigate = useNavigate()

  function NavToPage(url)
  {
    navigate(url)
  }
  return (
    <div>
      <h2>Home Page</h2>

      <button onClick={()=>NavToPage('/')}>Go to Home</button>
      <button onClick={()=>NavToPage('/contact')}>Go to Contact</button>
    </div>
  )
}
