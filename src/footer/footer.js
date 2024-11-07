import './footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    
        const handleCall = () => {
            window.location.href = 'tel: +2348071682388'
        }

        const handleMail = () => {
            window.location.href= 'mailto:femescog4@gmail.com'
        }

        const handleWhatsapp = () => {
            window.location.href=  'https://wa.me/+2348139386017'
        }

        const handleFacebook = () =>{
            window.location.href =  'https://m.facebook.com/profile.php?id=61555016826689'
        }
    return(
        <>
        <div className='footer-Body'>
        <div className='footer-Nav-Body'>
        <div className='footer-Nav-Items-Slide'>
        <div className='footer-Nav-Items'>
        <div className='f-item'>
            <Link to='/home'><p>Home</p></Link>
        </div>
        <div className='f-item'>
            <Link to='/webservices'><p>Web Services</p></Link>
        </div>
        <div className='f-item'>
            <Link to='/bizservices'><p>Business <br/>Development <br/>Services</p></Link>
        </div>
        <div className='f-item'>
            <Link to='/ourTeam'><p>Our Team</p></Link>
        </div>
        </div>
        </div>
        <div className='socials'>
            <p>CONTACT US ON ALL PLATFORMS</p>
            <div className='contacts-items'>
                <div className='items whatsapp' onClick={handleWhatsapp}>
                    <i class="fa-brands fa-whatsapp"></i>   
                </div>
                <div className='items phone' onClick={handleCall}>
                    <i class="fa-solid fa-phone"></i>      
                </div>
                <div className='items facebook' onClick={handleFacebook}>
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <div className='items g-mail' onClick={handleMail}>
                    <i class="fa-solid fa-envelope"></i>
                </div>
            </div>
        </div>
        </div>
        <div className='copyright'>
            <p>@2024 All Copyright Reserved</p>
        </div>
        </div>
        </>
    )
}

export default Footer