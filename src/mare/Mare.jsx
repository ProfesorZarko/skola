import React from 'react';
import './Mare.css';
import MareInputForm from './MareInputForm';
import MareLaki7 from './MareLaki7';
import MareList from './MareList';
import MareJoke from './MareJoke';

export default function Mare() {
  return (
    <div className='mare'>
        <div className="upper">
            <div className='goreLevo'><MareJoke /></div>
            <div className='goreSredina'><MareList /></div>
            <div className='goreDesno' ><MareLaki7 /></div>
        </div>
        <div className="middle">
            <div className='goreLevo'>dole lefo</div>
            <div className='goreSredina'><MareJoke /></div>
            <div className='goreDesno' >dole desno</div>
        </div>
    </div>
  )
}
