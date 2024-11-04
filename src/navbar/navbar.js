import './navbar.css'
import NavLogo from './havenaacelogo.png'
import { Link } from 'react-router-dom'
function AllNav() {

    const date = new Date()
        
    var hour = date.getHours()
    var minute = date.getUTCMinutes()
    var second = date.getUTCSeconds()
    
    
    if (hour === 0) {
        hour = 12;
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute; 
    second = (second < 10) ? "0" + second : second; 
    
    setTimeout(1000)
    
    const bodyHour = document.querySelector('.hour').firstElementChild
    const bodyMinute = document.querySelector('.minute').firstElementChild
    const bodySecond = document.querySelector('.second').firstElementChild
    
    bodyHour.textContent = hour
    bodyMinute.textContent = minute
    bodySecond.textContent = second
    
    // for(let i = 0; i < div.length; i++){
    //     div[i].firstElementChild.classList.toggle('show')
    // }
    
    
    console.log(hour, minute, second)

    function show() {
        const responsiveNav = document.querySelector('.res-nav-bar')
        responsiveNav.classList.toggle('show')
        const navbar = document.querySelector('.navBar')
        navbar.classList.toggle('fixed')
    }
    return(
        <>
          <div className='navBar'>
                <div className='nav-Logo'>
                    <img src={NavLogo} alt=''/>
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
                    <i class="fa-solid fa-bars"></i>
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
        </>
    )
}

export default AllNav