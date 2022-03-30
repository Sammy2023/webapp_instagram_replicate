import React from 'react';
import css from "../styles/Profile.module.css";

function Profile(props){
  const {currentUserId, users, posts, followers} = props;
  const currentUser = users.filter((user) => user.id === currentUserId);
  const currentPost = followers.filter((follower) => follower.userId === currentUserId);
  const followYou = followers.filter((follower) => follower.userId === currentUserId);
  const following = followers.filter((follower) => follower.followerId === currentUserId);
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
          <div>
              <div>post</div>
          </div>
          <div>
            <div>{followYou.length}</div>
             <div>followers</div>
          </div>
          <div>
              <div>{following.length}</div>
              <div>following</div>
          </div>
      </div>
    </div>
  )  
}

export default Profile; 