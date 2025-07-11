import React, { useState } from 'react'

export default function MareClock() {
    const now = new Date().toLocaleTimeString();
    const [time, setTime]=useState(now);
    const updateTime=()=>{
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    setTimeout(updateTime, 1000);
  return (
    <div 
        style={{
            display: "flex",
            //flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
            width: "100%",
            backgroundColor: "cornflowerblue"
        }}
    >Mare time : <h2>{time} !!!</h2>

    </div>
  )
}
