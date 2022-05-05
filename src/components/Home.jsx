import React from 'react';
import Post from './Post.jsx'
import css from "../styles/Home.module.css";
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext.jsx';

function Home(props) {
  let {
    posts, users, comments, likes, currentUserId, 
    addComment, addLike, removeLike
  } = useContext(StoreContext);
  
  const {postId} = useParams();
  const navigate = useNavigate();
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
  console.log(currentUserId);
  return (
    !currentUserId ? <Navigate to="/"/> : <div className={css.homeContainer}>
      {postId === undefined ? posts.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
       .map(post =>
           <Post 
             key= {post.id}
             user={findUser(post, users)} 
             likes = {findLikes(post, likes)} 
             post = {post}
             comments = {findComments(post, comments)}
             onComment={addComment} 
             onLike={addLike}   
             onUnlike={removeLike}
        />)
        :posts.filter((post) => post.id == postId)
       .map(post =>
       <Post 
             key= {post.id}
             user={findUser(post, users)} 
             likes = {findLikes(post, likes)} 
             post = {post}
             comments = {findComments(post, comments)}
             onComment={addComment} 
             onLike={addLike}   
             onUnlike={removeLike}
      />)}
    </div>
  );
}

export default Home;