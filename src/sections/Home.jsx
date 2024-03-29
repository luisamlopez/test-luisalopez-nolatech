import Header from "../components/Header";
import Layout from "../components/Layout";
import background from "../assets/Prb_Header.png";
import { useState } from "react";
import Button from "../components/Button";

const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });

    return (


        <Layout backgroundImage={`url(${background})`} height="90vh" >

            <Header />
            <div
                style={{
                    fontSize: screenWidth > 768 ? "2.5rem" : "1.5rem",
                    fontWeight: "bold",
                    color: "var(--white-secondary)",
                    width: "fit-content",
                    margin: "0 auto",
                    marginLeft: screenWidth > 768 ? "40%" : "0",
                    marginTop: screenWidth > 768 ? "5%" : "40%",
                    padding: screenWidth > 768 ? "0" : "20px",


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
                    fontWeight: "bold",
                    fontSize: screenWidth > 768 ? "1.5rem" : "1rem",
                    marginTop: screenWidth > 768 ? "100px" : "20px",
                }}>
                    WHAT IS NEXT
                </Button>
            </div>
        </Layout>
    )
}


export default Home;