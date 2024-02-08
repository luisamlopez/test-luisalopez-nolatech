import Carousel from "../components/Carousel";
import Layout from "../components/Layout"
import { useState } from "react";
import pic7 from "../assets/Pic7.png";
import pic8 from "../assets/Pic8.png";
import pic9 from "../assets/Pic9.png";
import pic10 from "../assets/Pic10.png";
import Button from "../components/Button";

// Carousel images
const images = [pic7, pic8, pic9, pic10];


const CarouselSection = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });
    return (
        <Layout backgroundColor="#006749">
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: screenWidth > 768 ? "40px 20px" : "0",
                textAlign: "center",
                margin: "20px 0",
            }}>

                <div style={{
                    width: screenWidth > 768 ? "50%" : "100%",
                }}>
                    <h3 style={{
                        fontSize: "2.5rem",
                        fontWeight: "bolder",
                        marginBottom: "20px",
                        width: "100%",
                        margin: "40px 0",
                        color: "var(--white-secondary)",
                    }}>
                        Lorem ipsum dolor sit amet
                    </h3>

                </div>
                <Carousel pictures={images} />
                <Button style={{
                    background: "var(--white-secondary)",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: screenWidth > 768 ? "1.2rem" : "1rem",
                    height: "60px",
                    marginTop: "20px",
                    width: screenWidth > 768 ? "250px" : "100%",
                }}>
                    VIEW ALL
                </Button>
            </div>
        </Layout>
    )


}

export default CarouselSection;