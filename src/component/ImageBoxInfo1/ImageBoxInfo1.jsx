import "./ImageBoxInfo1.css"


export default function ImageBoxInfo1({image, desc}){
    return(
        <>
            <div className="box1">
                <div className="img-box1">
                    <img src = {image} alt = "Image"/>
                </div>
                <div className="desc-box1">
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}