import './clock.css'
import React, {useState, useEffect} from 'react'
function Clock() {
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
  
    return(
        <>
                    <div className='nav-Contacts'>
                        <div class="clock">
                            <div class="hour"><p>{hour % 12 || 12} :</p></div>
                            <div class="minute"><p>{minute.toString().padStart(2, '0')} :</p></div>
                            <div class="second"><p>{second.toString().padStart(2, '0')}</p></div>
                            <div className='am'><p>{amPm.toString()}</p></div>
                        </div>
                    </div>
        </>
    )}



export default Clock