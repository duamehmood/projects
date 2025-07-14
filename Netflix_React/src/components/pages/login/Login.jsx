 
 import { useRef, useState } from "react";
 import "./Login.css";
 
 
 const Login = () => {
     
 
     
 
   return (
     
     <div className="login">
         <div className="container">
 
         <div className="top">
             <div className="wrapper d-flex align-items-center justify-content-between px-2 py-5"> 
             <img height="40px" className="logo" src="./src/assets/logo.svg" alt="netflix-logo" />
 
             
             
             </div>
         </div>
         <div className="containers d-flex flex-column align-items-center justify-content-center">
            <form class="d-flex flex-column justify-content-around">
                <h1>Sign In</h1>
                <input type="email" placeholder="email or phone number" />
                <input type="password" placeholder="password" />
                <button className="loginBtn">Sign In</button>
                <span>New to Netflix?<b>Sign up now</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more.</b>
                </small>
            </form>
            
         </div>
         </div>
       
     </div>
   )
 }
 
 export default Login
 