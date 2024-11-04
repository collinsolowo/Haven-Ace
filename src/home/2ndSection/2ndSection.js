import './2ndSection.css'
import secImg from './white-background-banner.jpeg'

function Section() {
    return(
        <>
        <div className='body-section'>
        <div className='section-image'>
        <img src={secImg} alt=''/>
        </div>
        <div className='section'>
            <div className='purple-header'><p>TOP NOTCH WEBSITES</p></div>
            <div className='white-paragraph-box'>
            <p>
            Your website is the most important soft resource for acquiring and building trust with existing and potential clients
online. Our website designer will help you plan, design, and develop your website with landing pages that function
effectively on desktops, tablets & mobile phones.<br/><br/>
Our website Developpers are pure professionals that have been trained to give
your websites, E-commerce platforms top-notch online presence based on
International best practice
            </p>
            </div>
        </div>
        </div>
        </>
    )
}


export default Section