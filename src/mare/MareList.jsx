import { useState } from 'react'
import MareInputForm from './MareInputForm'

export default function MareList() {
    const [users, setUsers]=useState([
        {name:'Ann', age: 13, id:1},
        {name:'Mare', age: 12, id:2},
        {name:'Zaki', age: 14, id:3},
    ]   )
    const addUser=(user) => {
        setUsers((prevUsers)=>{
            return [...prevUsers, user]
        })}
  return (
    <main className='mareList'>
        <MareInputForm dodajGa={addUser}/>
    <div>MareList:
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
    </div>
    </main>
  )
}
