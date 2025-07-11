import React, { useState } from 'react'

export default function MareInputForm() {
    const [user, setUser]=useState({
        name: '',
        age: ''
    })
    const handleChange = (e) => {
        setUser((prevValue)=> {
            return {
                ...prevValue,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>name: {user.name} & age : {user.age}</h2>
            <label htmlFor="name"> ime: </label>
           <input name="name" id='name' type="text" placeholder="ime"
           onChange={handleChange} value={user.name}  />
            <label htmlFor="age"> age: </label>
           <input type="number" id="age" placeholder='13' name='age'
           onChange={handleChange} value={user.age}/>
           <button>click to add user</button>
        </form>
    </div>
  )
}
