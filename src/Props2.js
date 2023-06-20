import React from 'react'

export default function Props2(p) {
  return (
    <div>
      <h2>Hello {p.name}</h2>
      <h2>City : {p.others.city}</h2>
      <h2>Phone : {p.others.phone}</h2>
    </div>
  )
}
