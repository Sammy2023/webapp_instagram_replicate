import React from 'react';
import css from '../styles/Navbar.module.css';
import {
  Link, useParams
} from "react-router-dom";

function Navbar(props){
  function handleNavChange(page){
    if (props.handleNavChange) {
        props.handleNavChange(page);
    }
  }
  const {postId} = useParams();
  console.log(postId == undefined);
  
  return (
  <nav className={css.navbar}>
    <div className={css.navItem}>
      <Link to="/">
        <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/home.svg?v=1647286968967"/>
      </Link>
    </div>
    <div className={css.navItem}>
      <Link to="explore">
        <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/explore.svg?v=1647286962718"/>
      </Link>
    </div>
    <div className={css.navItem}>
      <Link to="/newpost"> 
        <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/newpost.svg?v=1647287005893"/>
      </Link>
    </div>
    <div className={css.navItem}>
      <Link to="/like">
        <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/like.svg?v=1647287005893"/>
      </Link>
    </div>
    <div className={css.navItem}>
      <Link to="profile/:props.currentUserId">
        <img src="https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/profile.svg?v=1647287005893"/>
      </Link>
    </div>
  </nav>
  );
}

export default Navbar;