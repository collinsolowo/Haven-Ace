import './messageSection.css'
import { useForm, ValidationError } from '@formspree/react';
function MessageSection() {

    const [state, handleSubmit] = useForm('mgvezvqy')
    if (state.succeeded) {
         return alert('Your E-mail has been submitted. Kindly await our immediate response')
    }
    function submit(){

            //  First Name
        let fnameInput = document.querySelector('.names-section').firstElementChild.firstElementChild 
        if(fnameInput.value === ''){
            fnameInput.nextElementSibling.classList.add('show')
        }

        else{
            fnameInput.nextElementSibling.classList.remove('show')
        }

        var letters = /^[A-Za-z]+$/;
        if((!(fnameInput.value === '')) && !fnameInput.value.match(letters))
        {
            fnameInput.nextElementSibling.nextElementSibling.classList.add('show')
            console.log('hi')
        }

        else{
            fnameInput.nextElementSibling.nextElementSibling.classList.remove('show')
        }

            //  Last Name 
        let lnameInput = document.querySelector('.names-section').lastElementChild.firstElementChild 
        if(lnameInput.value === ''){
            lnameInput.nextElementSibling.classList.add('show')
        }

        else{
            lnameInput.nextElementSibling.classList.remove('show')
        }

         if((!(lnameInput.value === '')) && !lnameInput.value.match(letters))
        {
            lnameInput.nextElementSibling.nextElementSibling.classList.add('show')
            console.log('hi')
        }

        else{
            lnameInput.nextElementSibling.nextElementSibling.classList.remove('show')
        }

            //  Telephone
        let teleInput = document.querySelector('.telephone-section').firstElementChild.firstElementChild 
        if(teleInput.value === ''){
            teleInput.nextElementSibling.classList.add('show')
        }
    
        else{
            teleInput.nextElementSibling.classList.remove('show')
        }

        var numbers = /[0-9]$/
        if((!(teleInput.value === '')) && !teleInput.value.match(numbers))
        {
            teleInput.nextElementSibling.nextElementSibling.classList.add('show')
            console.log('hi')
        }

        else{
            teleInput.nextElementSibling.nextElementSibling.classList.remove('show')
        }
        //  E-mail
        let mailInput = document.querySelector('.telephone-section').lastElementChild.firstElementChild 
        if(mailInput.value === ''){
            mailInput.nextElementSibling.classList.add('show')
        }
    
        else{
            mailInput.nextElementSibling.classList.remove('show')
        }  

        var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if((!(mailInput.value === '')) && !mailInput.value.match(mail))
        {
            mailInput.nextElementSibling.nextElementSibling.classList.add('show')
            console.log('hi')
        }

        else{
            mailInput.nextElementSibling.nextElementSibling.classList.remove('show')
        }

        //  WriteUp
        let writeInput = document.querySelector('.write').firstElementChild.firstElementChild
        if(writeInput.value === ''){
            writeInput.nextElementSibling.classList.add('show')
        }
    
        else{
            writeInput.nextElementSibling.classList.remove('show')
        }

    
        if(!(writeInput.value === '') && (writeInput.value.length < 110)){
            writeInput.nextElementSibling.nextElementSibling.classList.add('show')
        }

        else{
            writeInput.nextElementSibling.nextElementSibling.classList.remove('show')
        }

        }


        return(
            <>
            <div className='message-Section'>
                <div className='message-header-section'>
                    <p>Get in touch with us.</p>
                    <span>Let’s help you to achieve your goals and grow your business with our website design packages.</span>
                </div>
                <form onSubmit={handleSubmit} action='https://formspree.io/f/mgvezqy'
                      method='POST'
                      enctype='multipart/form-data'>
                    <div className='input-section'>
            <div className='names-section'>
                <div className='column'>
                <input placeholder='First Name'/>
                <div className='error-message'>*This field cannot be empty</div>
                <div className='error-message'>*Name cannot contain numbers and symbols</div>
                </div>
                <div className='column'>
                <input placeholder='Surname'/>
                <div className='error-message'>*This field cannot be empty</div>
                <div className='error-message'>*Name cannot contain numbers and symbols</div>
                </div>
            </div>
            <div className='telephone-section'>
                <div className='column'>
                <input placeholder='Telephone'/>
                <div className='error-message'>*This field cannot be empty</div>
                <div className='error-message'>*This field cannot contain letters and symbols</div>
                </div>
                <div className='column'>
                <input placeholder='E-mail'/>
                <div className='error-message'>*This field cannot be empty</div>
                <div className='error-message'>*Invalid E-mail</div>
                </div>
            </div>
            <div className='writeup-section write'>
                <div className='column'>
                <input placeholder='Message'/>
                <div className='error-message'>*This field cannot be empty</div>
                <div className='error-message'>*Message should contain minimum of 30 words</div>
                </div>
            </div>
            <div className='submit-button' type='submit' onClick={submit} disabled={state.submitting}>Submit Message</div>
            </div>
             </form>
            </div>
            </>
        )
    }


export default MessageSection