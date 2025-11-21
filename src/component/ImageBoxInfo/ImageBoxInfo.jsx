import "./ImageBoxInfo.css"


export default function ImageBoxInfoi({image,desc }){
    return(
        <>
            <div className="box">
                <div className="img-box">
                    <img src = {image} alt = "Image"/>
                </div>
                <div className="desc-box">
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}