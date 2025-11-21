import "./Home.css"
import HeroBannerImage from "../../assets/Make me a logo for Riget Zoo.jpg"
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
import ImageBoxInfo1 from "../../component/ImageBoxInfo1/ImageBoxInfo1"
import ImageBoxInfo2 from "../../component/ImageBoxInfo2/ImageBoxInfo2"



export default function Home() {
    return (
        <>
        <HeaderSection/>
            <HeroBanner image = {HeroBannerImage}>
                <h1 className="banner-heading"> Discover the wonder wildlife<br/>
                    Riget Zoo Adventure
                </h1>
                <button className="banner-btn">Book Now</button>
            </HeroBanner>
            <Space/>
            <div className="h1-heading">Explore Your Favorite Animals</div>
            <div>
                <ImageBoxInfoi image={AnimalImage1} desc={"Come face-to-face with our giant panda, the star attraction of our zoo.This incredible animal symbolizes peace, care, and conservation, inspiring visitors of all ages. With their gentle nature and playful charm, pandas create an unforgettable experience that connects you directly to the wonder of wildlife."} />
                <ImageBoxInfo1 image ={AnimalImage2} desc ={"Come face-to-face with our giant panda, the star attraction of our zoo. This incredible animal symbolizes peace, care, and conservation, inspiring visitors of all ages. With their gentle nature and playful charm, pandas create an unforgettable experience that connects you directly to the wonder of wildlife."}/>
                <ImageBoxInfo2 image={AnimalImage3} image2={AnimalImage4} desc="Colorful parrots are among the most vibrant and intelligent birds in the animal kingdom. Known for their bright feathers in shades of green, red, blue, yellow, and orange, parrots captivate with their stunning appearance and playful behavior. These birds have strong, curved beaks perfect for cracking nuts and seeds, and zygodactyl feet (two toes pointing forward and two backward) that help them grasp objects with ease." />
                <ImageBoxInfoi image={AnimalImage5} desc="Elephants are the largest land mammals on Earth, known for their impressive size, intelligence, and strong social bonds. These majestic creatures have distinct long trunks, large ears, and tusks made of ivory. Elephants play a vital role in their ecosystems by helping to shape their environment, disperse seeds, and create water holes used by other animals." />
                <ImageBoxInfo1 image={AnimalImage6} desc="Water turtles are fascinating aquatic reptiles known for their adaptability and unique ability to live both in water and on land. They have streamlined shells that help them swim efficiently, and strong webbed feet or flippers designed for navigating rivers, lakes, and ponds. Water turtles feed on a varied diet including plants, insects, and small fish." />
                <ImageBoxInfoi image={AnimalImage7} desc="Crocodiles are large, powerful reptiles with strong jaws and tough skin. They live in rivers and swamps, hunting fish, birds, and mammals. Crocodiles help keep their ecosystems balanced but face threats from habitat loss and hunting. Conservation is important to protect these ancient creatures." />
            </div>
            <FooterSection/>
        </>
    )
}