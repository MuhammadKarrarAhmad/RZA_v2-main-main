import {Routes, Route} from "react-router"
import Home from "./Pages/Home/Home"
import Register from "./Pages/Register/Register"
import PlanYourDay from "./Pages/PlanYourDay/PlanYourDay"
import BookTicket from "./Pages/BookTicket/BookTicket"


export default function Routing(){
    return(
        <Routes>
            <Route path ='/' element = {<Home/>}/>
            <Route path="/BookTicket" element ={<BookTicket/>}/>
            <Route path ='/Register' element = {<Register/>}/>
            <Route path ="/PlanYourDay" element = {<PlanYourDay/>}/>
            

        </Routes>
    )
}