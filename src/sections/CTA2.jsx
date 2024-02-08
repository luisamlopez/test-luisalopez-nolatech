import Layout from "../components/Layout";
import drink from "../assets/Pic5.png";
import { useState } from "react";
import Button from "../components/Button";


const CTA2 = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });

    return (
        <Layout
            backgroundColor="#03B044" >
            <div style={{
                display: "flex",
                flexDirection: screenWidth > 768 ? "row" : "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "left",
            }}>

                <div
                >
                    <h3 style={{
                        fontSize: "2.5rem",
                        fontWeight: "bolder",
                        marginBottom: "20px",
                        width: screenWidth > 768 ? "50%" : "100%",
                        margin: "40px 0",
                        color: "var(--white-secondary)",
                    }}>
                        Lorem ipsum dolor sit amet, consetetur
                    </h3>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        width: screenWidth > 768 ? "50%" : "100%",
                    }}>
                        <Button style={{
                            background: "var(--white-secondary)",
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            height: "60px",
                        }}>
                            LOREM IPSUM DOLOR SIT
                        </Button>

                        <Button style={{
                            background: "transparent",
                            color: "var(--white-secondary)",
                            border: "1px solid var(--white-secondary)",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            height: "60px",

                        }}>
                            LOREM IPSUM DOLOR SIT AMET
                        </Button>
                    </div>

                </div>

                <img src={drink} alt="drink" width={screenWidth > 768 ? 550 : 350} />
            </div>

        </Layout>);
}

export default CTA2;