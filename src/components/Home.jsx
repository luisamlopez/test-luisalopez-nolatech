import Header from "./Header";
import Layout from "./Layout";
import background from "../assets/Prb_Header.png";
import { useState } from "react";
import Button from "./Button";

const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });

    return (
        <>
            <div style={{
                background: `url(${background}) no-repeat center center`,
                backgroundSize: "cover",
                height: "90vh",
                display: "flex",
                flexDirection: "column",
                width: "100%",

            }}>
                {/* Backdrop */}
                <div style={{
                    background: "rgba(0, 0, 0, 0.25)",
                    width: "100%",
                    height: "100%",

                }}>

                    <Header />
                    <div
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                            color: "var(--white-secondary)",
                            width: "fit-content",
                            margin: "0 auto",
                            marginLeft: "40%",
                            marginTop: "5%",

                        }}
                    >
                        <h2>LOREM IPSUM</h2>
                        <h2 style={{
                            background: "var(--white-secondary)",
                            color: "black",
                        }}>LOREM IPSUM DOLOR</h2>
                        <h2>LOREM IPSUM</h2>
                        <Button style={{
                            background: "var(--green-primary)",
                            color: "var(--white-secondary)",
                            fontSize: "1.5rem",
                            marginTop: "100px",
                        }}>
                            WHAT IS NEXT
                        </Button>
                    </div>


                </div>

            </div>




        </>
    )
}


export default Home;