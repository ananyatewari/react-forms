import React, { useState } from 'react'
import "./App.css"

export default function App() {

  const [field, setField] = useState({
    firstName : "",
    lastName : "",
    email : "",
    number : ""
  })

  const [check, setCheck] = useState(false)
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
    if (field.firstName && field.lastName && field.number && field.email && field.number.length === 10) {
      setCheck(true)
    }
  }

  return (
    <>
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <h2>{check && submit ? "Registration successful !" : ""}</h2>
      <div>
      <h3>First name</h3>
      <input type="text" placeholder='Enter first name' onChange={(e) => setField({...field, firstName: e.target.value})} value={field.firstName}/>
      <h4>{submit && !field.firstName ? "Please enter your firstname" : ""}</h4>
      </div>
      <div>
      <h3>Last name</h3>
      <input type="text" placeholder='Enter last name' onChange={(e) => setField({...field, lastName : e.target.value})} value={field.lastName}/>
      <h4>{submit && !field.lastName ? "Please enter your lastname" : ""}</h4>
      </div>
      <div>
      <h3>Email</h3>
      <input type="email" placeholder='Enter email' onChange={(e) => setField({...field, email : e.target.value})} value={field.email}/>
      <h4>{submit && !field.email ? "Please enter your email ID" : ""}</h4>
      </div>
      <div>
      <h3>Phone number</h3>
      <input type="tel" placeholder='Enter phone number' onChange={(e) => setField({...field, number : e.target.value})} value={field.number}/>
      <h4>{submit && !field.number ? "Please enter your number" : ""}{submit && field.number.length != 10 ? "Please enter valid phone number" : ""}</h4>
      </div>
      <button type='submit'>register</button>
    </form>
    </>
  )
}
