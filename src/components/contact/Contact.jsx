import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z6m0kab','template_ig9hxj6', form.current,'Y2BuNfjK_9H7gndd8')
     e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:dummyegator@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>egatortutorial</h5>
            <a href="https://m.me/ernest.achiever"target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9065181292</h5>
            <a href="https://web.whatsapp.com/+91 9065181292"target="_blank">Send a Message</a>
          </article>

        </div>
        {/* End of Contact Option */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text"name='name' placeholder='Your Full Name' required/>
            <input type="text"name='mobile' placeholder='Your Phone Number' required/>
            <input type="email" name='email' placeholder='Your Email'required />
            {/* <input type="address" name='address' placeholder='Your Address'required /> */}
            <textarea name="address "rows="7" placeholder='Address' required></textarea>
            <textarea name="message "rows="7" placeholder='Your Message' ></textarea>
            <button type='Submit'className='btn btn-primary'>Submit</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
