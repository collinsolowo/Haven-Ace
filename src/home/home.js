import './home.css'
import Background from './backgroundNavbar/backgroundNav'
import Section from './2ndSection/2ndSection'
import MessageSection from './messageSection/messageSection'
import DesignProcess from './designProcess/designProcess'
import Footer from '../footer/footer'
function Home() {
    return(
        <>
        <Background/>
        <Section/>
        <MessageSection/>
        <DesignProcess/>
        <Footer/>
        </>
    )

}

export default Home