import React, { useState,  useRef } from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com' // Importing emailjs
import Layout from '../Layout/Layout';

function Contact() {
  const [formElements, setformElements] = useState("")
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [description, setdescription] = useState();

  const handleOnChange = (e) => {
    console.log("Handle on change");
    setformElements(e.target.value);
  }

  // Taken from emailjs docs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_2mp7tzs', 'template_8t9vhsi', form.current, '7Tr7DoGXcC_4hpdqM')

    // setformElements('');
    setname('');
    setemail('');
    setdescription('');
  };

  return (
    <Layout>
      <section id='contact'>
        <h5>If you have any kind of Notes - Related to RTU, DSA, Any type of Tech Skills, Do Email or WhatsApp me</h5>
        <h2>Contact Me</h2>

        <div className="container contact-container">
          <div className="contact-options">
            <article className="contact-option">
              <HiOutlineMail className='option-icon'/>
              <h4>Email</h4>
              <h6>ajmat1130666@gmail.com</h6>
              <a href="mailto:ajmat1130666@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className="contact-option">
              <BsLinkedin className='option-icon'/>
              <h4>LinkedIn</h4>
              <h6>Ajmat Kathat</h6>
              <a href="https://linkedin.com/in/ajmat-kathat-0a5b45252" target="_blank">Send a message</a>
            </article>
            <article className="contact-option">
              <BsWhatsapp className='option-icon'/>
              <h4>WhatsApp</h4>
              <h6>+91-95212xxxxx</h6>
              <a href="https://api.whatsapp.com/send?phone=9521200877" target="_blank">Send a message</a>
            </article>
          </div>

          {/* Using useRef hook for the action of the form */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Enter Your Name' value={name} onChange={(e) => setname(e.target.value)} required/>
            <input type="email" name='email' placeholder='Enter Your Email' value={email} onChange={(e) => setemail(e.target.value)} required />
            <textarea onChange={(e) => setdescription(e.target.value)} value={description} name="message" rows="7" placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn btn-primary submitButton'>Send Message</button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
