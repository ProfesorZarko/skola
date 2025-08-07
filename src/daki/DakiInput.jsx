import React from 'react'
import { useState } from 'react'

export default function DakiInput({dodajUsera}) {
    const [user, setUser]=useState({name:"", age:""})
    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dodajUsera(user);
        setUser({name:"", age:""})
    }
  return (
    <div>DakiInput je name: {user.name} , age: {user.age}
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name"> enter name</label>
            <input type="text" name='name' id='name' placeholder='name' onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="age"> enter age</label>
            <input type="number" name='age' id='age' placeholder='age' onChange={handleChange} />
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
