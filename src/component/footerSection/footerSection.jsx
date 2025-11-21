import "./footerSection.css"

export default function footerSection() {
    return (
        <>
            <div className="footer-box">
                <div className="logo" >
                    <img src="./src/assets/logo.png" alt="Logo" />
                </div>
                <div className="c1">
                    <nav className="navi">
                        <a href="/PlanYourDay">Map</a>
                        <a href="/PlanYourDay">Plan Your Day </a>
                        <a href="/Educational Purpose">Educational Purpose</a>
                        <a href="/BookTicket">Book a Ticket</a>
                        <a href="/reserve-room">Reserve a Room</a>
                        <a href="/Privacy Policy">Privacy Policy</a>
                    </nav>
                </div>
                <div className="contact-btn">
                    <h3>Contact Us </h3>
                    <a href="/Insta">Instagram</a>
                    <a href="/Insta">Facebook</a>
                    <a href="/Insta">Twitter</a>
                </div>
                <div className="location-btn">
                    <h4 >Location: </h4>
                    <h5> Bewdley DY12 2AP </h5>
                </div>
                <div className="location-img">
                    <img src="./src/assets/Location.png" alt="Location"></img>
                </div>
            </div>
        </>
    )
}