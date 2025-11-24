import "./BookHotel.css"
import HeaderSection from "../../component/headerSection/headerSection"
import FooterSection from "../../component/FooterSection/footerSection"
import { DateRange } from 'react-date-range'
import { format } from "date-fns"
import { useState } from "react"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function BookHotel({ minValue = 1, minValue2 = 0, maxValue = 20, }) {
    // this is the function for the counter how many adults and the childer are 
    const [count, setCount] = useState(minValue);


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
    // making a function for cloesing abd opening the calender 
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    return (
        <>
            <HeaderSection />
            {/* making the title  */}
            <div className="hotel-title">
                <h1>Make Your Riget Zoo Adventure Unforgettable<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With stay our amazing hotel</h1>
            </div>

            {/* here is making the hotel layout for adults */}
            <div className="Hotel-selction1">
                <div className="select-adult">
                    <h3>Adult</h3>
                </div>
                <div className="hotelCounter-function1">
                    <button onClick={Addhandle} >
                        <span>+</span>
                    </button>
                    <p>{count}</p>

                    <button onClick={Subtracthandle}>
                        <span>-</span>
                    </button>
                </div>
            </div>

            {/* here is making the hotel layout for child */}
            <div className="Hotel-selction2">
                <div className="select-child">
                    <h3>Child(3-16)</h3>

                </div>
                <div className="hotelCounter-function2">
                    <button onClick={Addhandle1}>
                        <span>+</span>
                    </button>
                    <p>{count1}</p>

                    <button onClick={Subtracthandle2}>
                        <span>-</span>
                    </button>
                </div>
            </div>
         
            <div className="hotel-calendar-section">
                <div className="start-date-label">
                    <h3>Start Date-End Date </h3>
                </div>

                {/* Date Box */}
                <div className="date-box" onClick={() => setOpenDate(!openDate)}>
                    <span className="date-display">
                        {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                    </span>
                </div>

                {/* Calendar */}
                {openDate && (
                    <div className="calendar-popup">
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                        />
                    </div>
                )}
            </div>
            
                <a className="hotel-continue-btn" href="/SelectRoom">Continue</a>
            <FooterSection />
        </>
    );
}
