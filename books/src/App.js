import React from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
  
        <Router>
          <div>
      <Navbar />

        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
      <Jumbotron />
        </Router>
     
      
    
  );
}

export default App;
