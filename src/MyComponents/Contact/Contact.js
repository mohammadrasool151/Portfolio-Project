import React, { useState } from 'react';
import Contactcss from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

export const Contact = (props) => {
    // const formRef = useRef();
    const [done, setDone] = useState(false)

    // const myStle = () =>{
    //     props.darkmode && {backgroundColor : 'red'}
    // }

    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const ppp = (e) => {
        e.preventDefault()
        if (!name || !subject || !email || !message) {
            alert("Enter the all field")
        }
        setDone(!done)
        props.postName({ name, subject, email, message })
        setName("")
        setSubject("")
        setEmail("")
        setMessage("")



    }


    return (
        // <div style={props.darkmode===false? {backgroundColor : "white", color : ""} : {backgroundColor : "black", color : "white"}}>
        <div id='contact'>

            <div className={Contactcss.bothside}>
                <div className={Contactcss.leftside}>
                    <div className={Contactcss.leftlayer}>

                    </div>
                    <div className={Contactcss.insideleft}>
                        <p className={Contactcss.letsdiscuss}>Let's discuss your project</p>
                        <div className={Contactcss.contactleftdetails}>
                            <div className={Contactcss.leftitem}>
                                <FontAwesomeIcon className={Contactcss.call} icon={faPhone} />

                                <p>+91 8341469900</p>
                            </div>
                            <div className={Contactcss.leftitem}>
                                <FontAwesomeIcon className={Contactcss.email} icon={faEnvelope} />

                                <p>rasool69900@gmail.com</p>
                            </div>
                            <div className={Contactcss.leftitem}>
                                <FontAwesomeIcon className={Contactcss.location} icon={faLocationDot} />

                                <p>Andhra Pradesh, India</p>
                            </div>

                        </div>
                    </div>


                </div>
                <div className={Contactcss.rightside} >
                    <div className={Contactcss.rightheading}>
                        <p> <b className={Contactcss.yourstory}>Nice to have you here!</b> Please fill the details to get in touch with me. <br>I am always available for freelancing if the right project comes along me.
                        And also I am Open for internships.</p>
                    </div>
                    <div className={Contactcss.formcontent}>
                        <form onSubmit={ppp}>
                            <div className={Contactcss.nameform}>

                                {/* <label for="name}>First Name</label> */}
                                {/* style={props.darkmode === true ? {backgroundColor : "#333"} : {backgroundColor : "#fff"} } */}
                                <input type="text" id="name" name="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                            </div>
                            <div className={Contactcss.subjectform}>

                                {/* <label for="subject}>Subject</label> */}
                                <input type="text" id="subject" name="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
                            </div>
                            <div className={Contactcss.emailform}>

                                {/* <label for="email}>Email</label> */}
                                <input type="email" id="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            </div>
                            <div className={Contactcss.messageform}>
                                <textarea rows="5" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} name="message"></textarea>
                            </div>

                            <input className={Contactcss.button} type="submit" value="Submit" />
                            {done && <p className={Contactcss.lastmsg}>Thank you for messaging me, I will contact you shortly.</p>}
                        </form>

                    </div>

                </div>
            </div>

        </div>
    )
}
