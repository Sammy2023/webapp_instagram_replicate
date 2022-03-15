import React from 'react';
import css from '../styles/Header.module.css';

function Header(){
  return (
    <div className={css.header}>
      <div className={css.headerItem}>
        <button>
          <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/camera.svg?v=1647286942560"/>
        </button>
      </div>
      <div className={css.headerItem}>
        <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/logo.png?v=1647286990188"/>
      </div> 
      <div className={css.headerItem}>
        <button>
          <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/message.svg?v=1647286942560"/>
        </button>
      </div> 
    </div>
  );
}

export default Header;