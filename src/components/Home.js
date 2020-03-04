import React, { Component, createRef } from 'react';
import '../animate.css';

import $ from 'jquery';

import downArrow from '../assets/images/downArrow.png';
import Render from '../assets/images/render.jpg';
import Logo from '../assets/images/logoWhite';
import Residences from '../assets/images/bannerResidences.jpg';

import TextPath from '../assets/images/textPath';

class Home extends Component {
    constructor(props) {
        super(props);
        this.scrollDiv = createRef();
        this.state = {
            viewWidth: 0,
        }
    }

    componentDidMount() {

        let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        this.setState({viewWidth: vw});

        setTimeout(() => {
            $('.banner .text .subtitle').css('opacity', 1);
            $('.banner .text .subtitle').addClass('animated slideInRight');
        },1000)

        setTimeout(()=> {
            $('.banner .text .title').css('opacity', 1);
            $('.banner .text .title').addClass('animated slideInRight');
        },1250)

        setTimeout(()=>{
            $('.banner .scrollDown a').css('opacity', 1);
            $('.banner .scrollDown a:first-child').addClass('animated slideInRight');
        }, 1750)

        setTimeout(()=> {
            $('.banner .scrollDown .downArrow').css('opacity', 1);
            $('.banner .scrollDown .downArrow').addClass('animated slideInDownShort');
        }, 2250)

        window.addEventListener('resize', () => {
            vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

            this.setState({viewWidth: vw});
        })

        window.addEventListener('scroll', ()=> {
            requestAnimationFrame(()=>{
                let scrollSpeed = window.scrollY/200;

                if(this.state.viewWidth < 1024){
                    $('.residences .content .contentImg').css('transform', ('translateY(0%)'))
                    $('.film .content .contentImg').css('transform', ('translateY(0%)'))

                    $('.residences .content .contentInfo').css('transform', ('translate(-50%, -50%)'))

                    $('.film .content .contentImg').css('transform', ('translateY(0%)'))
                }else {
                    $('.film .content .contentImg').css('transform', 'translateY(calc(5% - ' + scrollSpeed + '%))');

                    $('.residences .content .contentImg').css('transform', 'translateY(calc(-5% + ' + scrollSpeed + '%))')

                    $('.film .content .contentInfo').css('transform', 'translateY(calc(-5% + ' + scrollSpeed + '%))')

                    $('.residences .content .contentInfo').css('transform', 'translateY(calc(5% - ' + scrollSpeed + '%))');
                }
            })
        });

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
                    <TextPath />
                </section>

                <section className='film' id='film'>
                    <div className='content'>
                        <div className='contentImg'>
                            <a href="#"><img src={Render} /></a>
                        </div>

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