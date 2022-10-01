import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import P1 from "./P1";
import img3 from "../../Images/p-3.jpg"
import './signup.css'
import Footer from "./Footer";


// ===============Toastify================

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CloseButton = ({ closeToast }) => (
  <i className="fa fa-times close" onClick={closeToast}></i>
);

// =========================================





const Signup = () => {


// ==================LoginUser toastify && Validation===============

const [fE, setFE] = useState({});
const [isS, setIsS] = useState(false);

const [abc, setAbc] = useState({
  EmailyLg: "",
  PasswordLg: "",
});

const loginHandleChange = (e) => {
  const { name, value } = e.target;
  setAbc({ ...abc, [name]: value });
};

const LoginUser = (e) => {
  e.preventDefault();
  setFE(validateLg(abc));



  const { EmailyLg, PasswordLg } = abc;
  if(EmailyLg && PasswordLg )
   {
    setAbc({
      EmailyLg: "",
      PasswordLg: "",
  })
    

    toast.info('Coming Soon ...', {
      position: toast.POSITION.TOP_CENTER,
      className: 'toast-message'

    }) 
   }

};


useEffect(() => {
  console.log(fE);
  if (Object.keys(fE).length === 0 && isS) {
    console.log(abc);
  }
}, [fE]);






const validateLg = (valuesLg) => {
  const errorslg = {};

  const regexE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexpwdLg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])(?=.{6,14})/;
    
    if(!valuesLg.EmailyLg){
      alert('Login Email is required');
    }
    else if (!regexE.test(valuesLg.EmailyLg))
     {
      alert('This is not a valid Email !');
      valuesLg.EmailyLg =""
    }

    if(!valuesLg.PasswordLg){
      alert('Enter your Password');
    }
    else if(!regexpwdLg.test(valuesLg.PasswordLg))
    {
      alert('Wrong Password !!!    Your Password will be between 6 and 14 characters and at least 1 lowercase alphabetical character and at least 1 uppercase alphabetical character and at least 1 numeric character and at least one special character except (*) ');
      valuesLg.PasswordLg =""
    }

    return errorslg;

};

// ===================================================











// =============Register Form Details Check==============

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [registerformValues, setregisterFormValues] = useState({
    EmailyRg: "",
    Password: "",
    CnfPassword: ""
  });


  const registerHandleChange = (e) => {
    const { name, value } = e.target;
    setregisterFormValues({ ...registerformValues, [name]: value });
  };


  const registerUser = async (e) => {
    e.preventDefault();
    setFormErrors(validate(registerformValues));

    const { EmailyRg, Password, CnfPassword } = registerformValues;
    if(EmailyRg && Password && CnfPassword )
     {

        const res = fetch("https://react-js-restaurant-default-rtdb.firebaseio.com/registerRecords.json ", { method: "POST", 
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                                         EmailyRg,
                                                         Password,
                                                         CnfPassword
                                                      }) 
                                })
                      
                   if(res)
                           {
                               setregisterFormValues({
                                  EmailyRg: "",
                                  Password: "",
                                   CnfPassword: ""
                                })
                                 

                                toast.success('Registered Successfuly !', {
                                  position: toast.POSITION.TOP_CENTER,
                                  className: 'toast-message'
                                  }) 
                               }
                  else
                    {
                        toast.error('Kuch Lafra Hogya Yrr, Phirse kar !', {
                           position: toast.POSITION.TOP_CENTER,
                           className: 'toast-message'
                        }) 
                    }

      }; 
    //   setregisterFormValues({
    //     EmailyRg: "",
    //     Password: "",
    //     CnfPassword: ""
    // })

      
 
  };



  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(registerformValues);
    }
  }, [formErrors]);

  // =======================================================


  // =================Form Validation Register===============

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexpwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])(?=.{6,14})/;
    

    if(!values.EmailyRg){
      alert('Email is required');
    }
    else if (!regex.test(values.EmailyRg)) {
      alert('This is not a valid Email format !')
      values.EmailyRg =""
    }

    if(!values.Password){
      alert('Set a strong password');
    }
   
    else if(!regexpwd.test(values.Password))
    {
      alert('Password must between 6 and 14 characters and at least 1 lowercase alphabetical character and at least 1 uppercase alphabetical character and at least 1 numeric character and at least one special character except (*) ');
      values.Password =""
    }
   

    if(!values.CnfPassword){
      alert('Confirm your password');
    }
    else if((values.CnfPassword) !== (values.Password))
    {
      alert('Oops! Password mismatched')
      values.CnfPassword =""
    }
    

    return errors;
  };

  // ====================================




  return (
    <>
     <P1 topimg={img3} topText="Account" />

     <div className="registerAcc container grid2">
    
       <div className="box">
        <h2>Login</h2>
        <form action="" >
        <input type="text" name='EmailyLg' placeholder='Email' value={abc.EmailyLg} onChange={loginHandleChange}  />
        <input type="password" name='PasswordLg' placeholder='Password' value={abc.PasswordLg} onChange={loginHandleChange}/>

        <button className="btnregisterAcc" onClick={LoginUser}>Login</button> 
        {/* <ToastContainer  closeButton={CloseButton}/>   */}
        </form>
       </div>

       
       <div className="box">

       <button className="btnCart">
          <Link to="/cart">
            <i class="fa-solid fa-bag-shopping"></i>
                <span>Visit Cart</span> 
            <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </button>

        <h2>Register</h2>
        <form action="" id='register-form'>
        <input type="text" name='EmailyRg' placeholder='Email'  value={registerformValues.EmailyRg} onChange={registerHandleChange}/>
        <input type="password" name='Password' placeholder='Password' value={registerformValues.Password} onChange={registerHandleChange} />
        <input type="password" name='CnfPassword' placeholder='Confirm Password' value={registerformValues.CnfPassword} onChange={registerHandleChange} />

        <button className="btnregisterAcc" onClick={registerUser}>
          Register
        </button> 
        <ToastContainer  closeButton={CloseButton}/>
        </form>
       </div>

     </div>

     <Footer />
      
    </>
  );
}

export default Signup;



























