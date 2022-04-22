import React from "react";
import css from "../styles/Profile.module.css";
import PostThumbnail from "./PostThumbnail.jsx";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext.jsx";

function Profile(props) {
  let {
    posts,
    users,
    currentUserId,
    followers,
    addFollower,
    removeFollower,
  } = useContext(StoreContext);

  const { userId } = useParams();
  const currentUser = users.filter((user) => user.id == userId);
  console.log(userId);
  const currentPost = posts.filter((post) => post.userId == userId);
  let followerCondition =
    followers.filter(
      (follower) =>
        follower.followerId == currentUserId && follower.userId == userId
    ).length === 0
      ? false
      : true;

  const followYou = followers.filter((follower) => follower.userId == userId);
  const following = followers.filter(
    (follower) => follower.followerId === userId
  );

  function followBtnToggle() {
    addFollower(currentUserId, userId);
    followerCondition = true;
  }

  function unfollowBtnToggle() {
    removeFollower(currentUserId, userId);
    followerCondition = true;
  }
  
  return (
    <div className={css.profileContainer}>
      <div className={css.profileBar}>
        <img src={currentUser[0].photo} />
        <div>
          <p>{currentUser[0].id}</p>
          {!(currentUserId == userId) ? (
            <button
              className={followerCondition ? css.unfollowBtn : css.followBtn}
              onClick={followerCondition ? unfollowBtnToggle : followBtnToggle}
            >
              {" "}
              {followerCondition ? "unfollow" : "follow"}
            </button>
          ) : (
            ""
          )}
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
