import React from 'react';
import './Mare.css';
import MareInputForm from './MareInputForm';
import MareLaki7 from './MareLaki7';

export default function Mare() {
  return (
    <div className='mare'>
        <div className="upper">
            <div className='goreLevo'><MareInputForm /></div>
            <div className='goreSredina'>g</div>
            <div className='goreDesno' ><MareLaki7 /></div>
        </div>
        <div className="middle">
            <div className='goreLevo'>dole lefo</div>
            <div className='goreSredina'>dole sredina</div>
            <div className='goreDesno' >dole desno</div>
        </div>
    </div>
  )
}
