import "./ResetPassword.css"
import logo from "../../assets/logo.png"

export default function ResetPassword() {
    return (
        <div className="ForgetPageContainer">
            <header>
                <div className="Logo">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <h1 className="Main-heading">Welcome to Regit Zoo Adventure</h1>
            </header >

            <div className="Email-part">
                <h3>Email</h3>
                <input type="email" required />
            </div>

            <p className="text-guide">We will send you a link through the mail. <br />Through that link you can reset your password</p>

            <div className="reset-btn">
                <a href="/">
                    <button>Send Link</button>
                </a>
            </div>

            </div>
            )
}