import Layout from "../components/Layout";
import drink from "../assets/Pic1.png";
import { useState } from "react";

const About = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });

    return (
        <Layout>
            <div style={{
                display: "flex",
                flexDirection: screenWidth > 768 ? "row" : "column",
                alignItems: "center",
                justifyContent: "center",
                padding: screenWidth > 768 ? "40px 20px" : "0",
                textAlign: "left",
                margin: "50px 0",
            }}>

                <div>
                    <h3 style={{
                        fontSize: "2.5rem",
                        fontWeight: "bolder",
                        marginBottom: "20px",
                        width: screenWidth > 768 ? "50%" : "100%",
                        margin: "40px 0",
                    }}>
                        Lorem ipsum dolor sit amet
                    </h3>
                    <p style={{
                        lineHeight: "1.5",
                        width: screenWidth > 768 ? "90%" : "100%",
                        fontSize: "1.4rem",
                    }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    </p>
                </div>

                <img src={drink} alt="drink" width={screenWidth > 768 ? 550 : 350} />
            </div>

        </Layout>)
};

export default About;