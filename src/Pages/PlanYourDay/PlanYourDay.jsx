import "./PlanYourDay.css"
import MapImage from "../../assets/LondonZoo.webp"
import AnimalImage1 from "../../assets/panda image.jpg"
import AnimalImage2 from "../../assets/giraffe.webp"
import AnimalImage3 from "../../assets/Scarlet_Macaw.webp"
import AnimalImage4 from "../../assets/parrot.jpg"
import AnimalImage5 from "../../assets/elephant.jpg"
import AnimalImage6 from "../../assets/turtle.webp"
import AnimalImage7 from "../../assets/crocodial.jpg"

import HeaderSection from "../../component/headerSection/headerSection"
import FooterSection from "../../component/FooterSection/footerSection"
import HeroBanner from "../../component/HeroBanner/HeroBanner"
import Space from "../../component/Space/Space"
import ImageBoxInfoi from "../../component/ImageBoxInfo/ImageBoxInfo"
import ImageBoxInfo2 from "../../component/ImageBoxInfo2/ImageBoxInfo2"

export default function PlanYourDay() {
    return (
        <>
            <HeaderSection />
            <div className="map-img">
                <HeroBanner image={MapImage} />
            </div>
            <Space />
            <h1 className="map-h1">Which Part you want to Explore?</h1>

            <div>
                <button className="plan-btn-box">ASIA</button>
                <ImageBoxInfoi image={AnimalImage1} desc={"Come face-to-face with our giant panda, the star attraction of our zoo.This incredible animal symbolizes peace, care, and conservation, inspiring visitors of all ages. With their gentle nature and playful charm, pandas create an unforgettable experience that connects you directly to the wonder of wildlife."} />
                <button className="plan-btn-box">Europe</button>
                <ImageBoxInfo2 image={AnimalImage3} image2={AnimalImage4} desc="Colorful parrots are among the most vibrant and intelligent birds in the animal kingdom. Known for their bright feathers in shades of green, red, blue, yellow, and orange, parrots captivate with their stunning appearance and playful behavior. These birds have strong, curved beaks perfect for cracking nuts and seeds, and zygodactyl feet (two toes pointing forward and two backward) that help them grasp objects with ease." />
                <button className="plan-btn-box">Base Camp</button>
                <ImageBoxInfoi image={AnimalImage6} desc="Water turtles are fascinating aquatic reptiles known for their adaptability and unique ability to live both in water and on land. They have streamlined shells that help them swim efficiently, and strong webbed feet or flippers designed for navigating rivers, lakes, and ponds. Water turtles feed on a varied diet including plants, insects, and small fish." />
                <button className="plan-btn-box">Africa</button>
                <ImageBoxInfo2 image2={AnimalImage7} desc="Crocodiles are large, powerful reptiles with strong jaws and tough skin. They live in rivers and swamps, hunting fish, birds, and mammals. Crocodiles help keep their ecosystems balanced but face threats from habitat loss and hunting. Conservation is important to protect these ancient creatures." />
            </div>
            <FooterSection/>
        </>
    )
}