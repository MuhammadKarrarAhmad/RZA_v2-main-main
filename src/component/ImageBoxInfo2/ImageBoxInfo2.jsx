import "./ImageBoxInfo2.css"


export default function ImageBoxInfo2({image, desc, image2}){
    return(
        <>
            <div className="box2">
                <div className="img-box2">
                    <img src = {image} alt = "Image"/>
                </div>
                <div className="desc-box2">
                    <p>{desc}</p>
                </div>
                <div className="img-box2">
                    <img src={image2} alt = "Image"/>
                </div>
            </div>
        </>
    )
}