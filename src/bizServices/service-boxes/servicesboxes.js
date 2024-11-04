import React,{useEffect} from "react";
import './servicesboxes.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function ServiceBoxes() {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <div className='bizservice-boxes-background'>
            <div className='box-slide'>
                <div data-aos="fade-right" className='box red'>
                    <p>STAGE 1: Process Design</p>
                    <span>1. Identify business objectives<br/>
                          2. Define process scope and boundaries<br/>
                          3. Gather requirements from stakeholders<br/>
                          4. Create process maps<br/>
                          5. Develop process documentation<br/>
                    </span>
                </div>
                <div data-aos="fade-up" className='box yellow'>
                    <p>STAGE 2: Process Analysis</p>
                    <span>1. Analyze existing processes<br/>
                          2. Identify inefficiencies, bottlenecks, and pain points<br/>
                          3. Assess process performance metrics<br/>
                          4. Identify opportunities for improvement<br/>
                          5. Develop recommendations for process changes<br/>
                    </span>
                </div>
                <div data-aos="fade-left" className='box blue'>
                    <p>STAGE 3: Process Modeling</p>
                    <span>1. Create process models (to-be)<br/>
                          2. Simulate process scenarios<br/>
                          3. Test and validate process changes<br/>
                          4. Refine process models based on feedback<br/>
                          5. Finalize process designs<br/>
                    </span>
                </div>
            </div>
            <div data-aos="fade-left" className='box-slide'>
                <div className='box purple'>
                    <p>STAGE 4: Process Implementation</p>
                    <span>1. Develop process-related policies and procedures<br/>
                          2. Train stakeholders on new processes<br/>
                          3. Implement process changes<br/>
                          4. Configure technology systems<br/>
                          5. Monitor and adjust processes during rollout<br/>
                    </span>
                </div>
                <div className='box green'>
                    <p>STAGE 5: Process Monitoring and Control</p>
                    <span>1. Track process performance metrics<br/>
                          2. Monitor process adherence and compliance<br/>
                          3. Identify deviations and exceptions<br/>
                          4. Take corrective actions<br/>
                          5. Continuously evaluate and improve processes<br/>
                    </span>
                </div>
                <div className='box orange'>
                    <p>STAGE 6: Process Optimization</p>
                    <span>
                        1. Analyze process performance data<br/>
                        2. Identify areas for further improvement<br/>
                        3. Apply lean principles and process re-engineering<br/>
                        4. Implement process changes and refinements<br/>
                        5. Validate benefits and ROI<br/>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceBoxes