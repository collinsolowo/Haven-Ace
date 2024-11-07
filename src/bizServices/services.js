import './services.css'
import AllNav from '../navbar/navbar'
import Footer from '../footer/footer'
import ServiceBackground from './serviceBackground/serviceBackground'
import ServiceBoxes from './service-boxes/servicesboxes'
import OtherServices from './otherServices/otherServices'

function BizServices() {
    return(
        <>
        <AllNav/>
        <ServiceBackground/>
        <ServiceBoxes/>
        <Footer/>
        </>
    )
}

export default BizServices