import React from 'react';
import css from '../styles/Navbar.module.css';

export default function Navbar(){
  function handleClick(page){
    
  }
  
  return (
  <nav className={css.navbar}>
    <div className={css.navItem}>
      <button>
        <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/home.svg?v=1647286968967"/>
      </button>
    </div>
    <div className={css.navItem}>
      <button>
        <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/explore.svg?v=1647286962718"/>
      </button>
    </div>
  </nav>
  );
}