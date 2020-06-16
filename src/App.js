import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Home from './Home'
// import Send from './Send'
// import Track from './Track'
// import Contact from './Contact'
import logistics from './images/logistics.png'

function App() {
  return (
    // <Router>
    <Home>
    {/* <div className="App">
      <header className="App-header">
    
        <nav className="navigate">
        <div className="inner-content">
        <img src={logistics} alt="logo" className="logo"/>
            <ul className="Nav-list">
              <li className="Navbar-Links">
               
                <a href="./Home/#ship" exact className="links">How it works</a>
                </li>
              <li className="Navbar-Links">
                <a href="./" className="links">Send parcel</a></li> 
              <li className="Navbar-Links">
              <a href="./" className="links">Track your Parcel</a></li>
              <li className="Navbar-Links">
               <a href="." className="links">Contact Us</a>
               </li> 
            </ul>
      </div>
      </nav>
      </header>
    </div> */}
    </Home>

    );
}


export default App;
