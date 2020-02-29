import React, { Component, createRef } from 'react';

import downArrow from '../assets/images/downArrow.png';
import Render from '../assets/images/render.jpg';
import Logo from '../assets/images/logoWhite';
import Residences from '../assets/images/bannerResidences.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.scrollDiv = createRef();
    }
    render(){
        return(
            <main>
                <div className='banner'>
                    <div className='text'>
                        <span className='subtitle'>Transforming Vancouver's</span>
                        <h1 className='title'>Skyline</h1>
                    </div>

                    <div className='scrollDown'>
                        <a href="#quote">Scroll Down</a>
                        <img
                            src={downArrow} 
                            className='downArrow'
                            onClick={()=>{
                                this.scrollDiv.current.scrollIntoView();
                            }}
                        />
                    </div>
                </div>

                <section className='quote' ref={this.scrollDiv}>
                    <h3>A Landmark</h3>
                    <div className='animatedText'>
                        <span>L</span>
                        <span>I</span>
                        <span>F</span>
                        <span>E</span>                        
                    </div>
                </section>

                <img src={Render} />

                <section className='film' id='film'>
                    <div className='content'>
                        <div className='contentInfo'>
                            <h3>This is</h3>
                            <Logo />
                            <a href='#'>Watch the Film ►</a>
                        </div>
                    </div>
                </section>

                <section className='residences' id='residences'>
                    <div className='content'>
                        <div className='contentImg'>
                            <a href="#"><img src={Residences} /></a>
                        </div>

                        <div className='contentInfo'>
                            <span className='subtitle'>Refined</span>
                            <h2>Residences</h2>
                            <a href="#">Discover the Residences</a>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Home;