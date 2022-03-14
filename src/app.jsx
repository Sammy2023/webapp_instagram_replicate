import React from "react";

// Import and apply global CSS stylesheet
import "./styles/styles.css";
// Import and apply App specific css
import css from "./styles/App.module.css"

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// App function that is reflected across the site
export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  
  setPage(page){
    console.log("child called me with", page);
    this.setState({
      page
    });
  }
  render(){
    return (
      <>
        <Seo />
        <div className={css.container}>
          <main role="main" className="wrapper">
            Boston College React Template         
          </main>
        </div>
      </>
  );
  }
}