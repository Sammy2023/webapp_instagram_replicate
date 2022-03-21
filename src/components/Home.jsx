import React from 'react';
import Post from './Post.jsx'

function Home() {
  const post ={
    user:{
      id:"judy",
      photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/user1.png?v=1647287055846",
    },
    post:{
      id:"post-1",
      userId:"judy",
      photo:"https://cdn.glitch.global/9bff44da-05b9-4d83-b4f6-75df2a433bfe/post1.png?v=1647287012210",
      desc:"#zootopia #excited",
      datetime: "2020-02-09T22:45:28Z"
    },
    likes: {
      self: true,
      count:1
    },
    comments:[
      {
        userId:"nick",
        text:"Welcome to Zootopia!"
      },
      {
          userId:"judy",
          text:"Thanks!😁Looking forward to meeting you!"
      }
    ]
  };
  
  return (
    <div>
      Home
      <Post user={post.user} 
            likes = {post.likes} 
            post = {post.post} 
            comments={post.comments}  />
    </div>
  );
}

export default Home;