import "./Login.css"
import logo from "../../assets/logo.png"
import HeaderSection from "../../component/headerSection/headerSection"
import { useState } from "react"

export default function Login() {
    const [show , setShow] = useState(false)
    return (

        <>
            <header>
                <div className="logo1">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <h1 className="main-heading">Welcome to Regit Zoo Adventure</h1>
            </header >

            <div className="email-part">
                <h3>Email</h3>
                <input type="email" required />
                <h3>Password</h3>
            </div>
            <div className="pass-part">
                
                <input type={show ? "text" : "password"} />

                <button onClick={() => setShow(!show)}>
                    {show ? "Hide" : "Show"}
                </button>
            </div>


            <div className="second-part">
                <h6>If you forget your password? <a href="/ResetPassword">Click Here</a><br />
                    If you do not have account click register button</h6>
            </div>
            <div className="buttons">
                <a href="/Register">Register</a>
                <a href="/">Login</a>
            </div>
        </>


    )
}   