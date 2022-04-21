import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Activity from "./components/Activity.jsx";
import Explore from "./components/Explore.jsx";
import Post from "./components/Post.jsx";
import NewPost from "./components/NewPost.jsx";
import Profile from "./components/Profile.jsx";
import initialStore from './util/initialStore.js';
import { useState } from 'react';
import uniqueId from './util/uniqueId.js';
import StoreContextProvider from './contexts/StoreContext.jsx';


// Import and apply global CSS stylesheet
import "./styles/styles.css";

// Import and apply App specific css
import css from "./styles/App.module.css"

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// To use router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// App function that is reflected across the site
export default function App (){
  
  return (
    <Router>
      <StoreContextProvider>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <div className={css.container}>
            <Header/>
            <main role="main" className="wrapper">
              <Routes>
                  <Route path="/" element={
                      <Home/>
                    }></Route>
                   <Route path=":postId" element={
                      <Home/>
                    }></Route>
                  <Route path="profile/:userId" element={
                      <Profile/>
                    }/>
                  <Route path="like" element={
                    <Activity/>
                  }/>
                  <Route path="explore" element={
                    <Explore/>
                  }/>
                  <Route path="newpost" element={
                    <NewPost
                      /*
                      onAddPost = {addPost}
                      */
                      />
                  }/>
                </Routes>
            </main>
            <Navbar
              /*
              currentUserId = {currentUserId}
              */
            />
          </div>
        </StoreContextProvider>
      </Router>
  );
  
}