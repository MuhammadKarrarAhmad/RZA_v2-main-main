import "./headerSection.css"
import { Link } from "react-router"
import Login1 from "../Login1/Login1"
import { useState } from "react"


export default function HeaderSection() {

    const [showPopup, setShowPopup] = useState(false)


    return (
        <>
            <div className="header-box">
                <div className="logo">
                    <a href="/">
                        <img src="./src/assets/logo.png" alt="Logo" />
                    </a>
                </div>
                <nav className="nav">
                    <a href="/">Educational Purpose</a>
                    <a href="/PlanYourDay">Plan Your Day </a>
                    <a href="/PlanYourDay">Map</a>
                    <div className="dropdown">
                        <button className="dropbtn">Book and Reserve ⌄</button>
                        <div className="dropdown-content">
                            <a href="/BookTicket">Book a Ticket</a>
                            <a href="/BookHotel">Reserve a Room</a>
                            <a href="/book-event">Book an Event</a>
                        </div>

                    </div>

                </nav>
                <a className="sign-in" onClick ={()=> setShowPopup(true)}> Login</a>
                {showPopup &&<Login1/>}
            </div >

        </>
    )
}
