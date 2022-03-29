import React from 'react';
import css from "../styles/Profile.module.css";

function Profile(props){
  const {currentUserId, users, post} = props;
  const currentUser = users.filter((user) => user.id === currentUserId);
  return (
    <div>
      <div className={css.profileBar}>
        <img src={currentUser[0].photo}/>
        <div>
          {currentUser[0].id}
        </div>
      </div>
        <div>{currentUser[0].name}</div>
        <div>{currentUser[0].bio}</div>
      <div >
      </div>
    </div>
  )  
}

export default Profile; 