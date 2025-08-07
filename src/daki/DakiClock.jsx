import React, { useState } from 'react'

export default function DakiClock() {
    const time= new Date().toLocaleTimeString();
    const [now, setNow] = useState(time);
    const updateTime = ()=>{
        const newTime = new Date().toLocaleTimeString();
        setNow(newTime);
    }
    setTimeout(updateTime, 1000);
  return (
    <div className='dakiClock' style={{textAlign: 'center',
     background:"plum", fontSize: '1.5rem', padding: '1rem',}}>
        DakiClock: {now}
    </div>
  )
}
