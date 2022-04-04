import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Activity from "./components/Activity.jsx";
import Explore from "./components/Explore.jsx";
import Post from "./components/Post.jsx";
import Profile from "./components/Profile.jsx";
import initialStore from './util/initialStore.js';
import { useState } from 'react';


// Import and apply global CSS stylesheet
import "./styles/styles.css";

// Import and apply App specific css
import css from "./styles/App.module.css"

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// App function that is reflected across the site
export default function App (){
  
  const [page, setPage] = useState('home');
  const [currentUserId, setCurrentUserId] = useState(initialStore.currentUserId);
  const [users, setUsers] = useState(initialStore.users);
  const [posts, setPosts] = useState(initialStore.posts);
  const [likes, setLikes] = useState(initialStore.likes);
  const [comments, setComments] = useState(initialStore.comments);
  const [followers, setFollowers] = useState(initialStore.followers);
  
//   constructor(props){
//     super(props);
//     //bind setPage 
//     // this.setPage = this.setPage.bind(this);
//     this.state = {
//       page: "home",
//       ...initialStore,
//     }
    
//     this.addLike = this.addLike.bind(this),
//     this.removeLike = this.removeLike.bind(this)
//     this.setPage = this.setPage.bind(this)
//   }
  
  function addLike(postId){
    const like ={
      userId: currentUserId,
      postId,
      datetime: new Date().toISOString(),
    };
    
    setLikes(likes.concat(like));
  }
  
  function removeLike(postId){
    setLikes(likes.filter((like) => !(like.userId === currentUserId && like.postId === postId)));
  }
  
  function addComment(postId, text){
    const comment = {
      userId: currentUserId,
      postId,
      text,
      datetime: new Date().toISOString(),
    }
    
    setComments(comments.concat(comment));
  }
  
  function renderMain(page){
    switch(page){
      case "home": 
        return <Home
        currentUserId = {currentUserId}
        posts = {posts} 
        users = {users}
        comments = {comments}
        likes = {likes}
        onLike = {addLike}
        onUnlike = {removeLike}
        onComment = {addComment}
        />;
      case "explore": return <Explore/>;
      case "newpost": return <NewPost/>;
      case "like": return <Activity/>;
      case "profile": return <Profile
        currentUserId = {currentUserId}
        posts = {posts} 
        users = {users}
        comments = {comments}
        followers = {followers}
        likes = {likes}
        onLike = {addLike}
        onUnlike = {removeLike}
        />;
    }
    setPage(page);
  }
  
  return (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <Seo />
        <div className={css.container}>
          <Header/>
          <main role="main" className="wrapper">
            {renderMain(page)}
          </main>
          <Navbar handleNavChange={setPage}/>
        </div>
      </>
  );
  
}