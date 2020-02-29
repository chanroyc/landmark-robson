import React, { Component } from 'react'
import './App.css';
import './animate.css';

import $ from 'jquery';
import 'jquery-ui';

import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './components/Home';

import Logo from './assets/images/Logo';
import bannerAmenities from './assets/images/bannerAmenities.jpg';
import bannerContact from './assets/images/bannerContact.jpg';
import bannerHome from './assets/images/bannerHome.jpg';
import bannerMedia from './assets/images/bannerMedia.jpg';
import bannerRegister from './assets/images/bannerRegister.jpg';
import bannerResidences from './assets/images/bannerResidences.jpg';
import bannerRobson from './assets/images/bannerRobson.jpg';
import bannerViews from './assets/images/bannerViews.jpg';




class App extends Component {

  constructor(props){
    super(props);
    this.state = {
                    isActive: false,
                    hoveredLink: "Home",
                    bgImageURL: bannerHome,
                    currScrollHeight: 0,
                    prevScrollHeight: 0,
                  };
  }

  componentDidMount(){
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    window.addEventListener('scroll', ()=>{
      this.setState({
                      'prevScrollHeight': this.state.currScrollHeight,
                      'currScrollHeight': window.scrollY
                    })
      if(this.state.currScrollHeight < this.state.prevScrollHeight ){
        $('header').removeClass('animated slideOutUp');
        $('header').addClass('animated slideInDown');
      }else if(this.state.currScrollHeight > vh ){
        $('header').removeClass('animatedSlideInDown');
        $('header').addClass('animated slideOutUp');
      }
    })
  }

  handleHamburger = () => {
    this.setState({'isActive': ! this.state.isActive })
    $(".navLinks").fadeToggle();
  }

  handleHover = (link) => {
    this.setState({hoveredLink: link});
    if(link === "Home"){
      this.setState({bgImageURL: bannerHome});
    }else if(link === "Robson"){
      this.setState({bgImageURL: bannerRobson});
    }else if (link === "Views"){
      this.setState({bgImageURL: bannerViews});
    }else if (link === "Residences"){
      this.setState({bgImageURL: bannerResidences});
    }else if (link === "Amenities"){
      this.setState({bgImageURL: bannerAmenities});
    }else if (link === "Team"){
      this.setState({bgImageURL: bannerHome});
    }else if (link === "Media"){
      this.setState({bgImageURL: bannerMedia});
    }else if (link === "Register"){
      this.setState({bgImageURL: bannerRegister});
    }else if (link === "Contact"){
      this.setState({bgImageURL: bannerContact});
    }
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

              <div className={this.state.isActive ? "navLinks active":"navLinks"} >
                <div className='menuBG' style={{ backgroundImage:`url(${this.state.bgImageURL})`}}></div>
                <div className='overlayBlack'></div>
                <ul>
                  <li><Link to="/" onMouseEnter={() => this.handleHover('Home')}>Home</Link></li>
                  <li><Link to="/" onMouseEnter={() => this.handleHover('Robson')}>Only One Robson</Link></li>
                  <li><Link to="/" onMouseEnter={() => this.handleHover('Views')}>270&deg; Views</Link></li>
                  <li><Link to="/" onMouseEnter={() => this.handleHover('Residences')}>Refined Residences</Link></li>
                  <li><Link to="/" onMouseEnter={() => this.handleHover('Amenities')}>Club Robson, Lifestyle<br/>Concierge Services</Link></li>
                  <li><Link to="/" onMouseEnter={() => this.handleHover('Team')}>Award-Winning Team</Link></li>
                  <li><Link to="/" onMouseEnter={() => this.handleHover('Media')}>Media</Link></li>
                  <li><Link to="/" onMouseEnter={() => this.handleHover('Register')}>Register</Link></li>
                  <li><Link to="/" onMouseEnter={() => this.handleHover('Contact')}>Contact</Link></li>
                </ul>
              </div>
              <div 
                className={this.state.isActive ? "hamburger hamburger--squeeze js-hamburger active" : "hamburger hamburger--squeeze js-hamburger" }
                onClick={this.handleHamburger}
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
