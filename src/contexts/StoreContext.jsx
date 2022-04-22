import React, { createContext, useState, useEffect } from "react";
import initialStore from "../util/initialStore.js";
import uniqueId from "../util/uniqueId.js";

// export the context so that other components can import it
export const StoreContext = React.createContext();

function StoreContextProvider(props) {
  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem("currentUserId")) || "home"
  );
  const [currentUserId, setCurrentUserId] = useState(
    JSON.parse(localStorage.getItem("currentUserId")) ||
      initialStore.currentUserId
  );
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || initialStore.users
  );
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || initialStore.posts
  );
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem("likes")) || initialStore.likes
  );

  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || initialStore.comments
  );
  const [followers, setFollowers] = useState(
    JSON.parse(localStorage.getItem("followers")) || initialStore.followers
  );

  useEffect(() => {
    console.log(users);
    window.localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
    console.log(likes);
  }, [likes]);


  function addLike(postId) {
    const like = {
      userId: currentUserId,
      postId,
      datetime: new Date().toISOString(),
    };

    setLikes(likes.concat(like));
  }

  function removeLike(postId) {
    setLikes(
      likes.filter(
        (like) => !(like.userId === currentUserId && like.postId === postId)
      )
    );
  }

  function addComment(postId, text) {
    const comment = {
      userId: currentUserId,
      postId,
      text,
      datetime: new Date().toISOString(),
    };

    setComments(comments.concat(comment));
  }

  function addPost(photo, desc) {
    const post = {
      userId: currentUserId,
      id: uniqueId("post"),
      datetime: new Date().toISOString(),
      photo: photo,
      desc: desc,
    };

    setPosts(posts.concat(post));
    setPage("home");
  }

  function addFollower(userId, followerId) {
    // use concat
    setFollowers(followers.concat({ userId, followerId }));
  }

  function removeFollower(userId, followerId) {
    // use filter
    setFollowers(followers.filter((follower) => follower.userId != followerId));
  }

  return (
    <StoreContext.Provider
      value={{
        page,
        users,
        currentUserId,
        posts,
        likes,
        comments,
        followers,
        addLike,
        removeLike,
        addComment,
        addPost,
        addFollower,
        removeFollower,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider; // export this component as default
