import { useState } from "react";
import Button from "../components/Button"
import Layout from "../components/Layout"
import Video from "../components/Video";
import video from "../assets/video.png";

const Videos = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });

    return (
        <Layout background="#F8F8FB">
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: screenWidth > 768 ? "40px 20px" : "0",
                textAlign: "center",
                margin: "50px 0",
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
                    }}>
                        Latest videos
                    </h3>

                </div>

                {/* Videos holder */}


                <div style={{
                    display: "grid",
                    gridTemplateColumns: screenWidth > 768 ? "repeat(3 ,1fr)" : "1fr",
                    gap: "30px",
                }}>
                    <Video image={video} title="Lorem ipsum dolor sit amet, constetur" />
                    <Video image={video} title="Lorem ipsum dolor sit amet, constetur" />
                    <Video image={video} title="Lorem ipsum dolor sit amet, constetur" />
                    <Video image={video} title="Lorem ipsum dolor sit amet, constetur" />
                    <Video image={video} title="Lorem ipsum dolor sit amet, constetur" />
                    <Video image={video} title="Lorem ipsum dolor sit amet, constetur" />
                </div>



                <Button style={{
                    background: "transparent",
                    color: "black",
                    border: "1px solid black",
                    fontWeight: "bolder",
                    padding: "20px 40px",
                    fontSize: screenWidth > 768 ? "1.5rem" : "1rem",
                    marginTop: "40px",
                }}>
                    VIEW ALL
                </Button>
            </div>

        </Layout>)
}

export default Videos;