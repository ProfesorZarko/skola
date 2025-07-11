import React, { useState } from 'react'
import MareClock from './MareClock';

export default function MareLaki7() {
    const d6=()=>Math.floor(Math.random()*6)+1;
    const sum =(nums)=>nums.reduce((p,c)=>p+c,0);
    const getRolls = (n) => Array.from({length: n}, d6);
    const [dice, setDice] = useState(getRolls(2));
    const won = sum(dice) === 7;
  return (
    <div className='mareLaki7'>
        <h3><MareClock /></h3>
        <h1 style={{color: won ? "purple" : "black"}}>
            Lucky7 {won ? "You won!":"You lose"}
        </h1>
           <section className='dice'> 
            <div >{dice[0]}</div>
            <div >{dice[1]}</div>
            </section>
        <button onClick={()=>setDice(getRolls(2))}>Roll</button>
    </div>
  )
}
