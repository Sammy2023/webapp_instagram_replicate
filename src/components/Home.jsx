import React from 'react';
import Post from './Post.jsx'
import css from "../styles/Home.module.css";

function Home(props) {
  // const post ={
  //   user:{
  //     id:"judy",
  //     photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/user1.png?v=1647287055846",
  //   },
  //   post:{
  //     id:"post-1",
  //     userId:"judy",
  //     photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/post1.png?v=1647287012210",
  //     desc:"#zootopia #excited",
  //     datetime: "2020-02-09T22:45:28Z"
  //   },
  //   likes: {
  //     self: true,
  //     count:1
  //   },
  //   comments:[
  //     {
  //       userId:"nick",
  //       text:"Welcome to Zootopia!"
  //     },
  //     {
  //       userId:"judy",
  //       text:"Thanks!😁Looking forward to meeting you!"
  //     }
  //   ]
  // };
  const {posts, users, likes, comments} = props;
  
  function findUser(post, users){
    return users.find((user) => user.id === post.userId);
  }
  
  function findUser(post, users){
    return users.find((user) => user.id === post.userId);
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
             comments={findComments(post, comments)}
      />)}
     
    </div>
  );
}

export default Home;