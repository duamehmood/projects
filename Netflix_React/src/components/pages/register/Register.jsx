
import { useRef, useState } from "react";
import "./Register.css";


const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

  return (
    
    <div className="register">
        <div className="container">

        <div className="top">
            <div className="wrapper d-flex align-items-center justify-content-between px-2 py-5"> 
            <img height="40px" className="logo" src="./src/assets/logo.svg" alt="netflix-logo" />

            <button className="loginBtn">
                Sign In
            </button>
            
            </div>
        </div>
        <div className="containers d-flex flex-column align-items-center justify-content-center">
            <h1>Unlimited movies, TV shows and  more.</h1>
            <h2>watch anywhere, cancel anytime.</h2>
            <p>Ready to watch? Enter your Email to create or restart your membership.</p>
        {!email ? (

            <div className="input d-flex align-items-center justify-content-between mt-3">
                <input type="email" placeholder="Email Address"ref={emailRef} />
                <button className="registerBtn" onClick={handleStart}>Get Started</button>
            </div>
        ) : (
            <form className="input d-flex align-items-center justify-content-between mt-3">
                <input type="password" placeholder="Password Address"ref={passwordRef} />
                <button className="registerBtn" onClick={handleFinish}>Start</button>
            </form>
        )}
        </div>
        </div>
      
    </div>
  )
}

export default Register
