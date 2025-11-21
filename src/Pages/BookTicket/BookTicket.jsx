import "./BookTicket.css"
import HeaderSection from "../../component/headerSection/headerSection"
import FooterSection from "../../component/FooterSection/footerSection"
import birdImage from "../../assets/macaw-parrot-isolated-on-transparent-background-file-cut-out-ai-generated-png.png"
import infoImag1 from "../../assets/Sibirischer_tiger_de_edit02.jpg"
import infoImag2 from"../../assets/gettyimages-1219403220-1024x1024.jpg"



export default function BookTicket() {
    return (
        <>
            <HeaderSection />
            <div className="book-h1">
                <h1>Secure Your Spot At Riget Zoo Adventure</h1>
            </div>
            <div className="ticket-h1">
                <h1>Ticket Date:</h1>
                <input type="date" required placeholder="Select your date" />
            </div>
            <div className="ticket-img">
                <img src={birdImage} alt="Parrot" />
            </div>
            <div className="ticket-date-h1">
                <h1>Available Tickets on selected date </h1>
            </div>
            <div className="ticket-info-box-1">
                <img className="ticket-img1" src={infoImag1} alt="image" />
                <div className="ticket-info-1">
                    <p className="box1-h1"><strong>Day Ticket - Truck ride is included</strong></p>
                    <p className="box1-h2">Adult 25.99, child 14.99</p>
                    <a href="/Login">Book Now</a> 
                </div>
            </div>
            <div className="ticket-info-box-2">
                <img className="ticket-img2" src={infoImag2} alt="image" />
                <div className="ticket-info-2">
                    <p className="box2-h1"><strong>One Day Ticket - Truck ride is not included</strong></p>
                    <p className="box2-h2">Adult 20.99, child 10.99</p>
                    <a href="/Login">Book Now</a>                
                </div>
            </div>
            <FooterSection />
        </>
    )
}