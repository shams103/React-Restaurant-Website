import React, { useState, useEffect } from 'react'
import Heading from '../common/Heading'
import P1 from './P1'
import P6 from './P6'
import Location from './Location'
import Footer from './Footer'
import img5 from "../../Images/p-5.jpg"
import './contact.css'

// ===============Toastify================

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CloseButton = ({ closeToast }) => (
  <i className="fa fa-times close" onClick={closeToast}></i>
);

// =========================================

const Contact = () => {

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [contactformValues, setcontactFormValues] = useState({
    Fullname: "",
    Phone: "",
    Emaily: "",
    Message: ""
  });

  const contactHandleChange = (e) => {
    const { name, value } = e.target;
    setcontactFormValues({ ...contactformValues, [name]: value });
  };

 

  const onSubmitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(contactformValues));

    const {Fullname, Phone, Emaily, Message} = contactformValues;
    if(Fullname && Phone && Emaily && Message )
     {

      setcontactFormValues({
        Fullname: "",
        Phone: "",
        Emaily: "",
        Message: ""
    })
      

      toast.success('Thanks for your cordial support !', {
        position: toast.POSITION.TOP_CENTER,
        className: 'toast-message'

      }) 
     }
 
  };

  

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(contactformValues);
    }
  }, [formErrors]);


  // =================Form Validation===============

  const validate = (values) => {
    const errors = {};
    const regex1 = /^[a-zA-Z][a-zA-Z ]+$/;
    const regex2 =  /^[6789][0-9]{9}$/;
    const regex3 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    

    if((!values.Fullname) || (values.Fullname.length < 3))
    {
      alert('Name is required');
    }
    else if(!regex1.test(values.Fullname))
    {
      alert('Name must be proper !');
      values.fname = ""
    }

    if(!values.Phone)
    {
      alert('Phone number is required');
    }
    else if(!regex2.test(values.Phone))
    {
      alert('Enter valid Indian Mobile Number');
      values.phone = ""
    }

    if(!values.Emaily){
      alert('Email is required');
    }
    else if (!regex3.test(values.Emaily)) {
      alert('This is not a valid Email format !')
      values.emaily=""
    }

    if(!values.Message){
      alert('Your message is missing...');
    }
   
    return errors;
  };

  // ====================================


  return (
    <>
      <P1 topimg={img5} topText="Contact Us" />

      <div className="container contactPage">
        <Heading title="Our Location" subtitle="- Visit Us -" />
        <P6 /> <br /><br />
        <Heading title="Contact Form" subtitle="- Send us a message -" />


        <form id="contact-form"  method='POST'>
          <div className="grid3">
            <div className="tf1">
              <input type="text" name='Fullname' placeholder='Name'   value={contactformValues.Fullname} onChange={contactHandleChange} />
            </div>
            <div className="tf2">
              <input type="tel" name='Phone' placeholder='Phone' minlength="10" maxlength="10"   value={contactformValues.Phone} onChange={contactHandleChange}  />
            </div>
            <div className="tf3">
              <input type="email" name='Emaily' placeholder='Email'   value={contactformValues.Emaily} onChange={contactHandleChange}/>
            </div>
          </div>
          <div className="ft">
            <textarea name='Message' rows="9" placeholder='Message'   value={contactformValues.Message} onChange={contactHandleChange}>
            </textarea>
          </div>

          <button type="submit" onClick={onSubmitForm}>
            Send Message
          </button>
          <ToastContainer  closeButton={CloseButton}/>
        </form>

      </div>
      <Location />
      <Footer />

    </>
  )
}

export default Contact
