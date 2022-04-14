import React from "react";
import css from "../styles/Profile.module.css";
import PostThumbnail from "./PostThumbnail.jsx";
import {Link, useParams} from "react-router-dom";

function Profile(props) {
  const {currentUserId, users, posts, followers, onFollow, onUnFollow} = props;
  const {userId} = useParams();
  const currentUser = users.filter((user) => user.id === userId);
  const currentPost = posts.filter((post) => post.userId === userId);
    
  const followYou = followers.filter(
    (follower) => follower.userId === userId
  );
  const following = followers.filter(
    (follower) => follower.followerId === userId
  );
  
  return (
    <div className={css.profileContainer}>
      <div className={css.profileBar}>
        <img src={currentUser[0].photo} />
        <div>
          <p>{currentUser[0].id}</p>
          {currentUserId != userId ? (followers.some((follower) => follower.followerId == userId) ?
              <button className={css.unfollowBtn} onClick={onUnFollow(currentUserId, userId)}> unfollow</button> : 
              <button className={css.followBtn} onClick={onFollow(currentUserId, userId)}> follow</button>) : ""
          }
        </div>
      </div>
      <div className={css.profileDetail}>
        <div>{currentUser[0].name}</div>
        <div>{currentUser[0].bio}</div>
      </div>
      <div className={css.profileStatus}>
        <div className={css.statusItem}>
          <div>{currentPost.length}</div>
          <p>post</p>
        </div>
        <div className={css.statusItem}>
          <div>{followYou.length}</div>
          <p>followers</p>
        </div>
        <div className={css.statusItem}>
          <div>{following.length}</div>
          <p>following</p>
        </div>
      </div>
      <div className={css.posts}>
        {posts
          .filter((post) => post.userId === userId)
          .map((post) => (
            <Link key={post.id} to={"/" + post.id}>
              <PostThumbnail post={post} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Profile;
