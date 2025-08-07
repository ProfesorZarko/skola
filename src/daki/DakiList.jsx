import React, { useState } from "react";
import DakiInut from "./DakiInput";

export default function DakiList() {
    const [users, setUsers] = useState([
        {name:"Marko", age:44, id:1},
        {name:"Ann", age:15, id:2}])
    const addUser = (user)=>{
        setUsers((prevUsers)=>{
            return [...prevUsers, {...user, id: 9}]
        })
    }
  return (
    <div>DakiList je:
        <ul>
            {users.map((user)=>{
                return <li key={user.id}>
                    {user.name} - {user.age} 
                    </li>
            })}
        </ul>
        <DakiInut dodajUsera={addUser} />
    </div>
  )
}
