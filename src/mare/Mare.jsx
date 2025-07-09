import React from 'react';
import './Mare.css';
import MareInputForm from './MareInputForm';

export default function Mare() {
  return (
    <div className='mare'>
        <div className="upper">
            <div className='goreLevo'>
                <MareInputForm />
            </div>
            <div className='goreSredina'>gore sredina</div>
            <div className='goreDesno'>gore desno</div>
        </div>
    </div>
  )
}
