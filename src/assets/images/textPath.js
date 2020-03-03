import React, { Component }from "react";

import $ from 'jquery';

class textPath extends Component {

    constructor(props){
        super(props);
        this.state = {
            viewHeight: 0,
        }
    }

    componentDidMount(){
        let textL = $('#textL');
        let textI = $('#textI');
        let textF = $('#textF');
        let textE = $('#textE');

        let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        this.setState({viewHeight: vh});

        window.addEventListener('resize', () => {
            vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            this.setState({viewHeight: vh});
        })

        function updateTextY(letter, offset){
            letter.attr('dy', offset)
        }

        window.addEventListener('scroll', () => {
            let scrollLE = window.scrollY*1.2/25 - 19.28;
            let scrollI = 66 - window.scrollY*1.75/25 + 19.28;
            let scrollF = 44 - window.scrollY*1.2/25 + 19.28;

            if( window.scrollY > this.state.viewHeight/2){
                requestAnimationFrame(()=>{
                    if (scrollLE < 22){
                        updateTextY(textL, scrollLE)
                        updateTextY(textE, scrollLE)
                    }

                    if(scrollI > 22){
                        updateTextY(textI, scrollI);
                    }

                    if(scrollF > 22){
                        updateTextY(textF, scrollF);
                    }                           
                })
            }
        });

    }
    render(){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 136">
                <path id="pathL" stroke="none" fill="none" strokeMiterlimit="10" d="M0 64h68"/>

                <text fontSize="60" fill="white">
                    <textPath href="#pathL">
                        <tspan id="textL" dy="0" dx="36">
                            L
                        </tspan>
                    </textPath>
                </text>
                
                <path id="pathI" stroke="none" fill="none" strokeMiterlimit="10" d="M68 64h68"/>

                <text fontSize="60" fill="white">
                    <textPath href="#pathI">
                        <tspan id="textI" dy="66" dx="28">
                            I
                        </tspan>
                    </textPath>
                </text>

                <path id="pathF" stroke="none" fill="none" strokeMiterlimit="10" d="M136 64h68"/>

                <text fontSize="60" fill="white">
                    <textPath href="#pathF">
                        <tspan id="textF" dy="44" dx="2">
                            F
                        </tspan>
                    </textPath>
                </text>
                
                <path id="pathE" stroke="none" fill="none" strokeMiterlimit="10" d="M204 64h68"/>

                <text fontSize="60" fill="white">
                    <textPath href="#pathE">
                        <tspan id="textE" dy="0" dx="-10">
                            E
                        </tspan>
                    </textPath>
                </text>
            </svg>
        )
    }
}

export default textPath;
