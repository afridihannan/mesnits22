import React from 'react';
import './styles.css';
import Menu from './menu';
import events from './data';


function Event() {
  return (
    <div className='event'>
      <div className='title'>
        <h2>events organised</h2>
      </div>
        <Menu items={events} />
    </div>
  )
}

export default Event