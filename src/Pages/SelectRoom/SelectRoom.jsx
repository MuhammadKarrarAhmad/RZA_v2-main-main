import "./SelectRoom.css"
import HeaderSection from "../../component/headerSection/headerSection"
import FooterSection from "../../component/FooterSection/footerSection"
import image1 from "../../assets/1920.webp"
import image2 from"../../assets/Manchester-Upper-Brook-Street-Travelodge-768x425.webp"
import image3 from "../../assets/389109706.jpg"
import image4 from "../../assets/images.jpeg"


export default function SelectRoom() {
    return (
        <>
            <HeaderSection />
            {/* making the title  */}
            <div className="Room-title">
                <h1>Make Your Riget Zoo Adventure Unforgettable<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With stay our amazing hotel</h1>
            </div>
            <div className="Room-info-box-1">
                <img className="Room-img1" src={image1} alt="image" />
                <div className="Room-info-1">
                    <p className="room-h1"><strong>Single Room</strong></p>
                    <p className="room-h2">Price per night £55</p>
                    <a href="/DayTicket">Select</a> 
                </div>
            </div>
            <div className="Room-info-box-1">
                <img className="Room-img1" src={image2} alt="image" />
                <div className="Room-info-1">
                    <p className="room-h1"><strong>Double Room</strong></p>
                    <p className="room-h2">Price per night £90</p>
                    <a href="/DayTicket">Select</a> 
                </div>
            </div>
            <div className="Room-info-box-1">
                <img className="Room-img1" src={image3} alt="image" />
                <div className="Room-info-1">
                    <p className="room-h1"><strong>Triple Room</strong></p>
                    <p className="room-h2">Price per night £130</p>
                    <a href="/DayTicket">Select</a> 
                </div>
            </div>
            <div className="Room-info-box-1">
                <img className="Room-img1" src={image4} alt="image" />
                <div className="Room-info-1">
                    <p className="room-h1"><strong>Quad Room</strong></p>
                    <p className="room-h2">Price per night £160</p>
                    <a href="/DayTicket">Select</a> 
                </div>
            </div>
            <a className="room-continue-btn" href="/SelectRoom">Continue</a>
            <a className="room-back-btn" href="/BookHotel">Back</a>
            <FooterSection />

        </>
    )
}