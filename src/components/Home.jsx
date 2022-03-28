import React from 'react';
import Post from './Post.jsx'
import css from "../styles/Home.module.css";

function Home(props) {
  const {posts, users, likes, comments, currentUserId} = props;
  
  function findUser(post, users){
    return users.find((user) => user.id === post.userId);
  }
  
  function findComments(post, comments) {
    return comments.filter((comment) => comment.postId === post.id);
  }  
  
  function findLikes(post, likes){
    let postLikes = likes.filter((like) => like.postId === post.id); 
    
    return {
      self: postLikes.some((like) => like.userId === currentUserId),
      count: postLikes.length,
    }
  }
  
  return (
    <div className={css.homeContainer}>
      {posts.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
       .map(post =>
           <Post 
             key= {post.id}
             user={findUser(post, users)} 
             likes = {findLikes(post, likes)} 
             post = {post}
             comments = {findComments(post, comments)}
      />)}
    </div>
  );
}

export default Home;