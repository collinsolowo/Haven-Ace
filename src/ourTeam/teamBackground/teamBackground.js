import './teamBackground.css'
import React, {useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import image3 from './Screenshot_20241101-162250~2.png'
import image1 from './imk.png'
import NavLogo from './havenaacelogo.png'
function TeamBackground() {
    useEffect(() => {
        AOS.init();
      }, []) 

      const [date, setDate] = useState(new Date());
    const [hour,setHour]  = useState(date.getHours());
    const [minute,setMinute] = useState(date.getMinutes());
    const [second,setSecond] = useState(date.getSeconds());
    const [amPm,setAmPm] = useState(hour>= 12 ? 'PM' : 'AM');

    useEffect(() => {
        const intervalid = setInterval(() => {
            const now = new Date();
            setHour(now.getHours());
            setMinute(now.getMinutes());
            setSecond(now.getSeconds());
            setAmPm(now.getHours() >= 12 ? 'PM' : 'AM');
        },1000);
        return() => clearInterval(intervalid)
    })

      function show() {
        const responsiveNav = document.querySelector('.res-nav-bar')
        responsiveNav.classList.toggle('show')
        const fullContent = document.querySelector('.team-house')
        fullContent.classList.toggle('offDisplay')
        const overlay = document.querySelector('.team-overlay')
        overlay.classList.toggle('offDisplay')
        const contentBackground = document.querySelector('.team-background')
        contentBackground.classList.toggle('offDisplay')
        const section = document.querySelector('.team')
        section.classList.toggle('fixed')
    }
    return(
        <>
        <div className='team'>        
                    <div className='navBar'>
                    <div className='nav-Logo'>
                        <img src={NavLogo} alt='' />
                    </div>
                    <div className='nav-Contents'>
                        <div className='item'>
                            <Link to='/home'>Home</Link>
                        </div>
                        <div className='item'>
                            <Link to='/webservices'>Web Services</Link>
                        </div>
                        <div className='item'>
                            <Link to='/bizservices'>Business Development Services</Link>
                        </div>
                        <div className='item'>
                            <Link to='/team'>Our Team</Link>
                        </div>
                    </div>
                    <div className='res-nav-Icon' onClick={show}>
                        <i className='fa-solid fa-bars'></i>
                    </div>
                    <div className='nav-Contacts'>
                        <div class="clock">
                            <div class="hour"><p>{hour % 12 || 12} :</p></div>
                            <div class="minute"><p>{minute.toString().padStart(2, '0')} :</p></div>
                            <div class="second"><p>{second.toString().padStart(2, '0')}</p></div>
                            <div className='am'><p>{amPm.toString()}</p></div>
                        </div>
                    </div>
                </div>
                <div className='res-nav-bar'>
                    <div className='item'>
                        <Link to='/home'>Home</Link>
                    </div>
                    <div className='item'>
                        <Link to='/webservices'>Web Services</Link>
                    </div>
                    <div className='item'>
                        <Link to='/bizservices'>Business Development Services</Link>
                    </div>
                    <div className='item'>
                        <Link to='/team'>Our Team</Link>
                    </div>
                </div>
        <div className='team-background'></div>
        <div className='team-overlay'></div>
        <div className='team-house'>
            <div className='team-intro-section'>
                <p data-aos='fade-left'>THE HAVEN ACE TEAM</p>
                <span data-aos='fade-down'>Work with one of the fatest growing web-developing and business consultancy organisation in Nigeria.<br/>
                Meet the team who leverages on synergy (2+2=5) put in relentless effort to provide effective and effficient solutions for your businesses.</span>
            </div>
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