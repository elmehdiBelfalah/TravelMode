import React from 'react';
import { Button } from './Button';
import './Section.css'
import '../App.css'
import sample from '../videos/video-1.mp4';


const Section = () => {
    return (
       <>
       <video src={sample} autoPlay loop muted ></video>
        <div className='section-container'>
        
        <h1>ADVENTURES AWAIT</h1>
        <p>what are you waiting for ?</p>
        <div className="section-btn">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' >GET STARTED</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--meduim' >Watch trailer 
            <i className='far fa-play-circle'></i></Button>
        </div>
    </div>
    </>
    );
}

export default Section;
