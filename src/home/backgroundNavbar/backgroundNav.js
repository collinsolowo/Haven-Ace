import './backgroundNav.css'
import { Link } from 'react-router-dom'
import NavLogo from './havenaacelogo.png'
function Background() {

    // const date = new Date()
        
    // var hour = date.getHours()
    // var minute = date.getUTCMinutes()
    // var second = date.getUTCSeconds()
    
    
    // if (hour === 0) {
    //     hour = 12;
    // }
    
    // hour = (hour < 10) ? "0" + hour : hour;
    // minute = (minute < 10) ? "0" + minute : minute; 
    // second = (second < 10) ? "0" + second : second; 
    
    // setTimeout(1000)
    
    // const bodyHour = document.getElementsByClassName('hour').firstElementChild
    // const bodyMinute = document.getElementsByClassName('minute').firstElementChild
    // const bodySecond = document.getElementsByClassName('second').firstElementChild
    
    // bodyHour.textContent = hour
    // bodyMinute.textContent = minute
    // bodySecond.textContent = second
    
    // // for(let i = 0; i < div.length; i++){
    // //     div[i].firstElementChild.classList.toggle('show')
    // // }
    
    
    // console.log(hour, minute, second)

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
                    <div class="hour"><p></p></div>
                    <div class="minute"><p></p></div>
                    <div class="second"><p></p></div>
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
                <div className='full-Content'></div>
                    <div className='right-house'>
                        <div className='haven-ace'>
                            <p><marquee>HavenAce Business Process Concepts</marquee></p>
                        </div>
                        <div className='more-info'>
                            <p>Need a website?<br /><span className='shrink'>Step into the very best of web-development solutions.<br />Here at HavenAce Business Process Concepts, we offer the very best in web-development, web-debugging and product-designing.<br /></span></p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Background