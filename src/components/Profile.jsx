import React from 'react';

function Profile(){
  return (
    <div>
      <div  className={css.profileBar}>
        <img src={user.photo}/>
        <div>
          {user.id}
        </div>
      </div>
    </div>
  )  
}

export default Profile; 