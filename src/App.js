import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './components/Home';

import Logo from './assets/images/Logo';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
                    isActive: false
                  };
  }

  render(){
    return (
      <>
        <Router>
          <header>
            <Link to="/" className='logo'><Logo /></Link>
            <nav>
              <ul className='navLinksLang'>
                <li><Link to="/">En</Link></li>
                <li><Link to="/">繁體</Link></li>
                <li><Link to="/">简体</Link></li>
                <li><Link to="/">Register</Link></li>
              </ul>

              <ul className={this.state.isActive ? "navLinks active":"navLinks"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Only One Robson</Link></li>
                <li><Link to="/">270&deg; Views</Link></li>
                <li><Link to="/">Refined Residences</Link></li>
                <li><Link to="/">Club Robson, Lifestyle<br/>Concierge Services</Link></li>
                <li><Link to="/">Award-Winning Team</Link></li>
                <li><Link to="/">Media</Link></li>
                <li><Link to="/">Register</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
              <div 
                className={this.state.isActive ? "hamburger hamburger--squeeze js-hamburger active" : "hamburger hamburger--squeeze js-hamburger" }
                onClick={()=> this.setState({isActive : !this.state.isActive})}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </nav>
          </header>

          <Switch>
            <Route exact patch="/"><Home /></Route>
          </Switch>
        </Router>
      </>
    );
  }
  }
export default App;
