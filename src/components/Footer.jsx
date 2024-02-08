import { useState } from "react";
import Layout from "./Layout";
import iconGrab from "../assets/icongrab.png";

const Footer = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });
    return (
        <Layout background="#F5F6FA">
            <footer
                style={{
                    display: "flex",
                    flexDirection: screenWidth > 768 ? "row" : "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: screenWidth > 768 ? "left" : "center",
                }}
            >

                <p style={{
                    width: screenWidth > 768 ? "20%" : "100%",
                    fontWeight: "bolder",
                    fontSize: screenWidth > 768 ? "1.1rem" : "1rem",
                }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>

                <img src={iconGrab} alt="Grab Logo" width={screenWidth > 768 ? 150 : 80} style={{
                }} />

                <p style={{
                    fontWeight: "bolder",
                    fontSize: screenWidth > 768 ? "1.2rem" : "1rem",
                    width: screenWidth > 768 ? "20%" : "100%",
                }}>
                    All rights reserved to Lorem Ipsum© 2022
                </p>

            </footer>
        </Layout>
    );
}

export default Footer;
