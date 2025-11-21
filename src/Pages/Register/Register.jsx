import "./Register.css"
import { useState } from "react"
import HeaderSection from "../../component/headerSection/headerSection"
import FooterSection from "../../component/FooterSection/footerSection"

export default function Register() {
    const [show, setShow] = useState(false)


    return (
        <>
            <HeaderSection />
            <div className="reg-page-wrapper">
                <div className="reg-pag">

                    <div className="reg-heading">
                        <h1>Regit Zoo Adventure</h1>
                        <p className="reg-intruction">You can update your preferences at any time in your customer account.<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By registering you are confirming that you are over 16 years old.<br />
                            By clicking 'Register' I confirm that I have read and understood the Privacy Policy.
                        </p>
                    </div>
                    <div className="reg-part-1">
                        <h5>Title*</h5>
                        {/* <input type="title" required placeholder="⌄" />
                         */}

                        <select required className="title-dropdown">
                            <option value="">Select Title</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Dr">Dr</option>
                            <option value="Prof">Prof</option>
                        </select>
                        <h5>Full Name*</h5>
                        <input type="text" required />
                        <h5>Date of Birth*</h5>
                        <input type="date" required placeholder="DD/MM/YYYY" />
                    </div>
                    <div className="reg-part-2">
                        <h5>Mobile Number*</h5>
                        {/* <input type="Number" required/> */}
                        <h5>Email*</h5>
                        {/* <input type="Email" required/> */}
                    </div>
                    <div className="reg-part-2-input">
                        <input type="tel" required />
                        <input type="Email" required />
                    </div>
                    <p> Your phone number will only be used if there is a query with or update to your booking.</p>
                    <div className="reg-part-3">
                        <h5>Postcode*</h5>
                        <div className="reg-part-3-input">
                            <input type="text" required />
                            <button>Find Address</button>
                        </div>
                    </div>
                    <div className="reg-part-4">
                        <h5>Address 1*</h5>
                        <h5>House/ Flat name or number</h5>
                    </div>
                    <div className="reg-part-4-input">
                        <input type="text" required />
                        <input type="text" required />
                    </div>

                    <div className="reg-part-5">
                        <h5>County/City</h5>
                        <h5>Town*</h5>

                    </div>
                    <div className="reg-part-5-input">
                        <input type="text" required />
                        <input type="text" required />
                    </div>

                    <div className="reg-part-6">
                        <h5>Password*</h5>
                        <h5>Comfrim Password*</h5>

                    </div>
                    <div className="reg-part-6-input">
                        <input type={show ? "text" : "password"} />
                        <input type={show ? "text" : "password"} />
                        <button onClick={() => setShow(!show)}>
                            {show ? "Hide" : "Show"}
                        </button>
                    </div>
                    <a href="/" className="reg-btn">Register</a>
                    {/* <button className="reg-btn">Register</button> */}




                </div>

            </div>
            <FooterSection />
        </>


    )
}