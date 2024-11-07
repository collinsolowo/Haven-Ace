import './navbar.css'
import NavLogo from './havenaacelogo.png'
import { Link } from 'react-router-dom'
function AllNav() {
    function show() {
        const responsiveNav = document.querySelector('.res-nav-bar')
        responsiveNav.classList.toggle('show')
        const navbar = document.querySelector('.navBar')
        navbar.classList.toggle('fixed')
        const Body = document.body
        body.style.display = 'none'
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