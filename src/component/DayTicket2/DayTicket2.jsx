import "./DayTicket2.css"
import { useState } from "react";
import logo from "../../assets/logo.png"
import infoImag2 from "../../assets/Sibirischer_tiger_de_edit02.jpg"


export default function DayTicket2({ minValue = 1, minValue2 = 0, maxValue = 20, price1 = 24.99, price2 = 13.99 }) {

    const [count, setCount] = useState(minValue);
    const totalPrice1 = count * price1;


    const Addhandle = () => {
        if (count < maxValue) {
            setCount((preState) => preState + 1);
        }
    };

    const Subtracthandle = () => {
        if (count > minValue) {
            setCount((preState) => preState - 1);
        }
    };

    const [count1, setCount1] = useState(minValue2);
    const totalPrice2 = count1 * price2;



    const Addhandle1 = () => {
        if (count1 < maxValue) {
            setCount1((preState) => preState + 1);
        }
    };

    const Subtracthandle2 = () => {
        if (count1 > minValue2) {
            setCount1((preState) => preState - 1);
        }
    };

    return (
        <div className="DayTicket2-Container">

            <div className="day-ticket2-logo">
                <a href="/">
                    <img src={logo} alt="Logo" />
                </a>
                <h1 className="day-ticket2-title">Welcome to Regit Zoo Adventure</h1>
            </div>

            <div className="DayTicket2-Box">
                <img className="DayTicket2-img" src={infoImag2} alt="image" />
                <div className="DayTicket2-info">
                    <p className="DayTicket2-box-h1"><strong>One Day Ticket - Truck ride is included</strong></p>
                    <p className="DayTicket2-box-h2">Adult 24.99, child 13.99</p>
                    <p className=" DayTicket2-box-h2">If you have more than 2 adults and 2 children, <br />book our Family Package and enjoy discounted prices!</p>

                </div>
            </div>

            {/* This is the part where user select the tickets  */}
            <div className="Ticket2-selction">
                <div className="adult-ticket2">
                    <h3>Adult</h3>
                    <p>Total Price: £{totalPrice1}</p>

                </div>
                <div className="counter-function2">
                    <button onClick={Addhandle}>
                        <span>+</span>
                    </button>
                    <p>{count}</p>

                    <button onClick={Subtracthandle}>
                        <span>-</span>
                    </button>
                </div>
            </div>
            <div className="Ticket2-selction">
                <div className="adult-ticket2">
                    <h3>Child(3-16)</h3>
                    <p>Total Price: £{totalPrice2}</p>

                </div>
                <div className="counter-function2">
                    <button onClick={Addhandle1}>
                        <span>+</span>
                    </button>
                    <p>{count1}</p>

                    <button onClick={Subtracthandle2}>
                        <span>-</span>
                    </button>
                </div>

            </div>
            {/* Making a continue button for continue the system */}
            <div className="two2-btn">
                <a className="continue2-bth2" href="/BookTicket">Back</a>
                <a className="continue2-bth" href="/">Continue</a>
            </div>



        </div>
    )
}