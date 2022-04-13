import React from "react";
import css from "../styles/Profile.module.css";
import PostThumbnail from "./PostThumbnail.jsx";
import {Link} from "react-router-dom";

function Profile(props) {
  const { currentUserId, users, posts, followers } = props;
  const currentUser = users.filter((user) => user.id === currentUserId);
  const currentPost = posts.filter((post) => post.userId === currentUserId);
  const followYou = followers.filter(
    (follower) => follower.userId === currentUserId
  );
  const following = followers.filter(
    (follower) => follower.followerId === currentUserId
  );
  return (
    <div className={css.profileContainer}>
      <div className={css.profileBar}>
        <img src={currentUser[0].photo} />
        <p>{currentUser[0].id}</p>
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
          .filter((post) => post.userId === currentUserId)
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
