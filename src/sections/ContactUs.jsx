import Layout from "../components/Layout";
import joinUs from "../assets/JoinUs.png";
import Button from "../components/Button";
import { useState } from "react";

const Contact = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });

    const style = {
        display: "flex",
        gap: "20px",
        flexDirection: screenWidth > 768 ? "row" : "column",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted")
    }

    return (
        <Layout background={screenWidth > 768 ? `url(${joinUs}) no-repeat center center` : 'var(--green-primary)'} height={screenWidth > 768 ? "110vh" : "auto"}>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: screenWidth > 768 ? "40px 20px" : "20px",
                    textAlign: "left",
                    margin: "0 auto",
                    width: screenWidth > 768 ? "50%" : "100%",
                    marginLeft: screenWidth > 768 ? "50%" : "0",
                    marginTop: "5%",
                    padding: "0",

                }}
            >
                <h3 style={{
                    fontSize: "2.5rem",
                    fontWeight: "bolder",
                    width: "100%",
                    margin: "40px 0",
                    textAlign: "left",
                    color: "var(--white-secondary)",

                }}>JOIN US.</h3>
                <p style={{
                    textAlign: "left",
                    color: "var(--white-secondary)",
                    fontSize: "1.5rem",
                }}>Lorem ipsum dolor sit, amet consectetur</p>
                <form onSubmit={onSubmit}
                    method="POST"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        width: "100%",
                        marginBottom: "40px",
                    }}
                >
                    <div style={style}>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Surname" />
                    </div>

                    <div style={style}>
                        <input type="text" placeholder="Phone" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div style={style}>
                        <input type="text" placeholder="Department" />
                    </div>
                    <div style={style}>
                        <textarea placeholder="Message" ></textarea>
                    </div>

                    <Button style={{
                        background: screenWidth > 768 ? "var(--green-primary)" : "var(--white-secondary)",
                        color: screenWidth > 768 ? "var(--white-secondary)" : "var(--green-primary)",
                        fontWeight: "bolder",
                        width: screenWidth > 768 ? "50%" : "100%",
                        marginButton: "20px",
                    }} onClick={onSubmit}>
                        I'M IN
                    </Button>
                </form>
            </div>

        </Layout>
    )
}

export default Contact;