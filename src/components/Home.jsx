import React from 'react';
import Post from './Post.jsx'
import css from "../styles/Home.module.css";
import { useParams } from 'react-router-dom';

function Home(props) {
  const {posts, users, likes, comments, currentUserId, onLike, onUnlike, onComment} = props;
  const {postId} = useParams();
  
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
      {postId != "/" ? posts.filter((post) => post.id == postId)
       .map(post =>
       <Post 
             key= {post.id}
             user={findUser(post, users)} 
             likes = {findLikes(post, likes)} 
             post = {post}
             comments = {findComments(post, comments)}
             onLike = {onLike}
             onUnlike = {onUnlike}
             onComment = {onComment}
      />)
      : posts.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
       .map(post =>
           <Post 
             key= {post.id}
             user={findUser(post, users)} 
             likes = {findLikes(post, likes)} 
             post = {post}
             comments = {findComments(post, comments)}
             onLike = {onLike}
             onUnlike = {onUnlike}
             onComment = {onComment}
      />)}
    </div>
  );
}

export default Home;