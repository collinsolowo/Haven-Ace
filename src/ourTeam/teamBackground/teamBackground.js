import './teamBackground.css'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image3 from './Screenshot_20241101-162250~2.png'
import image1 from './imk.png'
function TeamBackground() {
    useEffect(() => {
        AOS.init();
      }, []) 

    return(
        <>
        <div className='team-background'></div>
        <div className='team-overlay'></div>
        <div className='team-house'>
            <div className='team-intro-section'>
                <p data-aos='fade-left'>THE HAVEN ACE TEAM</p>
                <span data-aos='fade-down'>Work with one of the fatest growing web-developing and business consultancy organisation in Nigeria.<br/>
                Meet the team who leverages on synergy (2+2=5) put in relentless effort to provide effective and effficient solutions for your businesses.</span>
            </div>
        </div>
        <div className='player-card'>
            <div className='image-div'>
                <img src={image1} alt=''/>
            </div>
            <div className='info'>
                    <p className='title'>ISAAC OLOWOLAGBA</p>
                    <p className='bio'>CEO Haven Ace Business Process Concepts<br/><br/>Business Process Manager</p>
                    <span className='description'>With over 17 years of business process management and re-engineering,design,modelling,execution,monitoring and optimization.Professional in process identification,risk management,control design and implementation, monitoring and evaluation.Total business process internal control management across all industries. </span>
                </div>
        </div>
        <div className='player-card'>
            <div className='image-div'>
                <img src={image3} alt=''/>
            </div>
            <div className='info'>
                    <p className='title'>COLLINS OLOWOLAGBA</p>
                    <p className='bio'>Web Designer and Developer</p>
                    <span className='description'>With over 4 years of web-developing experience, Collins would head the team of proffesional web-developers to make sure that we meet and satisfy your website needs.</span>
                </div>
        </div>
        </>
    )
}

export default TeamBackground