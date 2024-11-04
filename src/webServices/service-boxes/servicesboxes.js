import './servicesboxes.css'

function ServiceBoxes() {
    return(
        <>
        <div className='service-boxes-background'>
            <div className='box-slide'>
                <div className='box red'>
                    <p>CUSTOM WEBSITE DEVELOPMENT</p>
                    <span>Get a fully interactive, responsive and user-friendly website application that meets your needs with our custom web development services.</span>
                </div>
                <div className='box yellow'>
                    <p>GRAPHICS & BRANDING</p>
                    <span>Our data-driven branding process helps you to create high quality visual identities that reflect your unique personality and values.</span>
                </div>
                <div className='box blue'>
                    <p>IT ADVISORY SERVICES</p>
                    <span>We offer the best IT advisory services that hepls businesses succeed in the digital age. Our team of experienced and certified professionals can help you with all of your IT needs. </span>
                </div>
            </div>
            <div className='box-slide'>
                <div className='box purple'>
                    <p>DIGITAL MARKETING</p>
                    <span>Our digital marketing team will help you grow your business with a customized that uses the most effective digita lmarketing channels</span>
                </div>
                <div className='box green'>
                    <p>UI/UX DESIGN</p>
                    <span>Our UI/UX design experts provide end to end design services from user research and wireframing to prototype design and testing</span>
                </div>
                <div className='box orange'>
                    <p>WEBSITE MAINTENANCE</p>
                    <span>The team would put in a collective effort to regularly update, track and ensure security and optimize performance based on clients' and users reviews.</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceBoxes