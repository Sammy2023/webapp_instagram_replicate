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
  
  setPage(page);
  
  function addLike(postId){
    const like ={
      userId: currentUserId,
      postId,
      datetime: new Date().toISOString(),
    };
    
    setLikes(likes.concat(like));
  }
  
  function removeLike(postId){
    setLikes(likes.filter((like) => !(like.userId === this.state.currentUserId && like.postId === postId)));
  }
  
  function renderMain(page){
    switch(page){
      case "home": 
        return <Home
        currentUserId = {this.state.currentUserId}
        posts = {this.state.posts} 
        users = {this.state.users}
        comments = {this.state.comments}
        likes = {this.state.likes}
        onLike = {this.addLike}
        onUnlike = {this.removeLike}
        />;
      case "explore": return <Explore/>;
      case "newpost": return <NewPost/>;
      case "like": return <Activity/>;
      case "profile": return <Profile
        currentUserId = {this.state.currentUserId}
        posts = {this.state.posts} 
        users = {this.state.users}
        comments = {this.state.comments}
        followers = {this.state.followers}
        likes = {this.state.likes}
        onLike = {this.addLike}
        onUnlike = {this.removeLike}
        />;
    }
  }
  function render(){
    return (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <Seo />
        <div className={css.container}>
          <Header/>
          <main role="main" className="wrapper">
            {this.renderMain(this.state.page)}
          </main>
          <Navbar handleNavChange={this.setPage}/>
        </div>
      </>
  );
  }
}