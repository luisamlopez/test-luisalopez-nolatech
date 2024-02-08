import Layout from "../components/Layout";
import { useState } from "react";
import pic2 from "../assets/Pic2.png";
import pic3 from "../assets/Pic3.png";
import pic4 from "../assets/Pic4.png";
import Card from "../components/Card";
import Button from "../components/Button";


const Services = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });

    return (
        <Layout backgroundColor="#F5F6FA">
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
                        margin: "20px 0",
                    }}>
                        Lorem ipsum
                    </h3>
                    <p style={{
                        lineHeight: "1.5",
                        width: "100%",
                        fontSize: "1.4rem",
                    }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                </div>

                {/* Card holder */}

                <div style={{
                    display: "flex",
                    flexDirection: screenWidth > 768 ? "row" : "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    textAlign: "center",
                    margin: screenWidth > 768 ? "5px 0" : "20px",
                    gap: "20px",
                }}>

                    <Card title="LOREM IPSUM" image={pic2} />
                    <Card title="LOREM IPSUM" image={pic3} />
                    <Card title="LOREM IPSUM" image={pic4} />

                </div>
                <Button style={{
                    background: "transparent",
                    color: "black",
                    border: "1px solid black",
                    fontWeight: "bolder",
                    padding: "20px 40px",
                    fontSize: screenWidth > 768 ? "1.5rem" : "1rem",

                }}>
                    LEARN MORE
                </Button>
            </div>

        </Layout>)
}

export default Services;
