import React, { useState, useEffect } from 'react'
import P1 from './P1'
import P6 from './P6'
import img9 from "../../Images/p-9.jpg"
import Heading from '../common/Heading'
import Footer from './Footer'
import './reservation.css'
import {  Clocks, Guests } from '../data/Data'
import $ from 'jquery'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CloseButton = ({ closeToast }) => (
  <i className="fa fa-times close" onClick={closeToast}></i>
);



const Reservation = () => {

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [formValues, setFormValues] = useState({
    date: "",
    arvt: "",
    gst: "",
    fname: "",
    phone: "",
    emaily: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  
  const submitData = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    const {date,arvt,gst,fname,emaily,phone} = formValues;
    if(date && arvt && gst && fname && emaily && phone )
     {

      setFormValues({
        date: "",
        arvt: "",
        gst: "",
        fname: "",
        phone: "",
        emaily: ""
    })
      

      toast.success('Table Booked Successfuly !', {
        position: toast.POSITION.TOP_CENTER,
        className: 'toast-message'

      }) 
     }
 
  }; 

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);


  const validate = (values) => {
    const errors = {};
    const regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex2 = /^[a-zA-Z][a-zA-Z ]+$/;
    const regex3 =  /^[6789][0-9]{9}$/;
    
    if (!values.date) {
      alert('Booking date is required');
    }

    if (!values.arvt) {
      alert('Arrival Time is required');
    }

    if(!values.gst)
    {
      alert('Guest Number is required');
    }

    if((!values.fname) || (values.fname.length < 3))
    {
      alert('Name is required');
    }
    else if(!regex2.test(values.fname))
    {
      alert('Name must be proper !');
      values.fname = ""
    }

    if(!values.phone)
    {
      alert('Phone number is required');
    }
    else if(!regex3.test(values.phone))
    {
      alert('Enter valid Indian Mobile Number');
      values.phone = ""
    }

    if(!values.emaily){
      alert('Email is required');
    }
    else if (!regex1.test(values.emaily)) {
      alert('This is not a valid Email format !')
      values.emaily=""
    }
   
    return errors;
  };

 
  // ----------Disable Past Date-----------

  $(function() 
  {
      $('#demo').datetimepicker( { minDate: 0 });
  }); 
  
$(function() {

  var today = new Date();
  var dd = String(today.getDate() + 1).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  $('#date_picker').attr('min',today);
})

  // -------------------------------------------



  return (
    <>
      <P1 topimg={img9} topText="Book Table" />

      <div className="container tableReserve">
        <div className="tbRr1">
          <Heading title="Oepn table" subtitle="- Book a Table -" />

          <form className="grid3" id='tableForm'>

            <div className="box">
              <input type="date" id="date_picker" name="date"  value={formValues.date} onChange={handleChange}/>
            </div>

            <div className="box">
              <select name="arvt" id="Atime"  value={formValues.arvt} onChange={handleChange}>
                <option value=""  hidden selected>Arrival Time</option>
                {Clocks.map((items, index) => (
                  <option value={items.label}>{items.label}</option>
                ))};
              </select>
            </div>

            <div className="box">
              <select name="gst" id="Gnumber" value={formValues.gst} onChange={handleChange}>
                <option value="" hidden selected>Guests Number</option>
                {Guests.map((items, index) => (
                  <option value={items.label}>{items.label}</option>
                ))};
              </select>
            </div>

            <div className="box">
              <input type="text" name='fname' placeholder='Name'  value={formValues.fname} onChange={handleChange} />
            </div>
            
            <div className="box">
              <input type="box" name='phone' placeholder='Phone' minlength="10" maxlength="10"  value={formValues.phone} onChange={handleChange} />
            </div>
            
            <div className="box">
              <input type="email" name='emaily' placeholder='Email' value={formValues.emaily} onChange={handleChange} />
            </div>
         </form>

        <div className="btnBook">
          <button type="submit" onClick={submitData}>Book Table</button>
          <ToastContainer  closeButton={CloseButton}/>
        </div>
   </div>
        <div className="tbRr2">
          <Heading title="Our Location" subtitle="- Visit Us -" />
          <P6 />
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Reservation





