import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Activity from "./components/Activity.jsx";
import Explore from "./components/Explore.jsx";
import Post from "./components/Post.jsx";
import Profile from "./components/Profile.jsx";
import initialStore from 'utils/initialStore.js';
import { useState } from 'react';


// Import and apply global CSS stylesheet
import "./styles/styles.css";

// Import and apply App specific css
import css from "./styles/App.module.css"

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// App function that is reflected across the site
export default class App extends React.Component {
  
  // const [page, setPage] = useState('home');
  // const [currentUserId, setCurrentUserId] = useState(initialStore.currentUserId);
  // const [users, setUsers] = useState(initialStore.users);
  // const [posts, setPosts] = useState(initialStore.posts);
  
  constructor(props){
    super(props);
    //bind setPage 
    // this.setPage = this.setPage.bind(this);
    this.state = {
      page: "home",
      ...initialStore,
    }
  }
  
  setPage(page){
    console.log("child called me with", page);
    console.log(this);
    this.setState({page: page});
  }
  
  renderMain(page){
    switch(page){
      case "home": return <Home/>;
      case "explore": return <Explore/>;
      case "newpost": return <NewPost/>;
      case "like": return <Activity/>;
      case "profile": return <Profile/>;
    }
  }
  render(){
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