import './backgroundNav.css'
import { Link } from 'react-router-dom'
import NavLogo from './havenaacelogo.png'
import React, {useState, useEffect} from 'react'
function Background() {
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
        const fullContent = document.querySelector('.full-Content')
        fullContent.classList.toggle('offDisplay')
        const overlay = document.querySelector('.overlay')
        overlay.classList.toggle('offDisplay')
        const contentBackground = document.querySelector('.content-Background')
        contentBackground.classList.toggle('offDisplay')
        const navbar = document.querySelector('.background-Body')
        navbar.classList.toggle('fixed')
    }
    return (
        <>
            <div className='background-Body'>
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
                <div className='content-Background'></div>
                <div className='overlay'></div>
                <div className='full-Content'>
                    <div className='right-house'>
                    <div className='haven-ace'>
                        <p><marquee>HavenAce Business Process Concepts</marquee></p>
                    </div>
                    <div className='more-info'>
                        <p>Need a website?<br /><span className='shrink'>Step into the very best of web-development solutions.<br />Here at HavenAce Business Process Concepts, we offer the very best in web-development, web-debugging and product-designing.<br /></span></p>
                    </div>
                </div></div>

            </div>
        </>
    )
}

export default Background