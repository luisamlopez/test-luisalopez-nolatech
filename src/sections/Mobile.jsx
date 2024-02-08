import { useState } from "react";
import Layout from "../components/Layout";
import background from "../assets/Pic6.png";
import Button from "../components/Button";

const Mobile = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });
    return (
        <Layout backgroundColor={screenWidth > 768 ? "rgba(0,0,0,0.3)" : 'var(--white-secondary)'} backgroundImage={screenWidth > 768 ? `url(${background})` : "none"} height={screenWidth > 768 ? "100vh" : "auto"}>
            <div>
                <h3 style={{
                    fontSize: "2.5rem",
                    fontWeight: "bolder",
                    width: screenWidth > 768 ? "20%" : "100%",
                    margin: screenWidth > 768 ? "80px 0" : "40px 0",
                    textAlign: screenWidth > 768 ? "left" : "center"
                }}>
                    Lorem ipsum dolor sit
                </h3>
                <p style={{
                    lineHeight: "1.5",
                    width: screenWidth > 768 ? "50%" : "100%",
                    fontSize: "1.4rem",
                }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>

                <Button style={{
                    background: "var(--green-primary)",
                    color: "var(--white-secondary)",
                    fontWeight: "bold",
                    fontSize: screenWidth > 768 ? "1.5rem" : "1rem",
                    marginTop: screenWidth > 768 ? "100px" : "20px",
                    marginBottom: "40px",
                    width: screenWidth > 768 ? "auto" : "100%"
                }}>
                    VIEW ALL
                </Button>
            </div>


        </Layout>
    );
}

export default Mobile;