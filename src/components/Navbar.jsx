import React from 'react';
import css from './Navbar.module.css';

export default function Navbar(){
  function handleClick(page){
    
  }
  
  return (
  <nav>
    <div className={css.navbar}>
      <button>
        <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/home.svg?v=1647286968967" alt="Home"/>
      </button>
      Navbar
    </div>
  </nav>
  );
}