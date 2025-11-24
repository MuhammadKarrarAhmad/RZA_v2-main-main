import "./AddAndSubtract.css"
import React, { useState } from "react"


// export default function AddAndSubtract(minValue = 0, maxValue = 100){

//     const [count, setCount] = useState(minValue);
    
//     const Addhandle=()=>{
//         if (count <maxValue){
//             setCount((preState) => preState +1);

//         }
//     };

//     const Subtracthandle =()=>{
//         if(count >minValue) {
//             setCount((preState) => preState -1);
//         }
//     }

//     return(
//         <div>
//             <button onClick={Addhandle}>
//                 <span>add</span>
//             </button>
//             <p>{count}</p>
//             <button onClick={Subtracthandle}>
//                 <span>
//                     remove
//                 </span>
//             </button>
//         </div>
//     )
// }

export default function AddAndSubtract({ minValue = 0, maxValue = 100, price = 10 }) {

    const [count, setCount] = useState(minValue);
    const totalPrice = count * price;
    
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

    return (
        <div className="counter-conatiner">
            <p>Total Price: £{totalPrice}</p> 
            <div className="counter-function">
                <button onClick={Addhandle}>
                    <span>+</span>
                </button>
                {/* <p>Total Price: £{totalPrice}</p>    */}
                <p>{count}</p>
                
                <button onClick={Subtracthandle}>
                    <span>-</span>
                </button>
            </div>
        </div>
    );
}
