import React from "react";
import { Link } from "react-router-dom";


const Navbar = props => 
     (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <a class="navbar-brand" href="#">Google Books Search</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/search">Search</a>
              <Link to="/" className={window.location.pathname === "Search" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/saved">Saved</a>
              <Link to="/" className={window.location.pathname === "Saved" ? "nav-link active" : "nav-link"}>
          
        </Link>
      </li>
            

          </ul>
        </div>
      </nav>       
    );


export default Navbar;
