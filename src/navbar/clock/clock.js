import './clock.css'

function Clock() {
    function showTime(){
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
        
        setTimeout(showTime,1000)
        
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
        }
    return(
        <>
            <div class="clock" onClick={showTime}>
            <div class="hour"><p>09</p></div>
            <div class="minute"><p>19</p></div>
            <div class="second"><p>28</p></div>
            </div>
        </>
    )
}


export default Clock