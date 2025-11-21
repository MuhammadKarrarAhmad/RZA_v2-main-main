import "./Space.css"

export default function Space(){
    return(
        
        <div className="space-banner">
            <button className="space-btn">Plan your Day</button>
            <div className="space-search">
                <input type ="text"  placeholder="Search..."/>
            </div>
            <div className="Weather-info">Weather: 8C/Clear</div>
        </div>
    )
}