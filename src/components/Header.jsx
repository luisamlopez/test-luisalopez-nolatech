import iconGrab from "../assets/icongrab.png";
import { useState } from "react";

const Header = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });


    return (
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "100%",
            margin: "0 auto",
            background: "transparent",
            padding: "10px 20px",

        }}>

            <div style={{
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                background: 'transparent',
                width: "100%",
                maxWidth: screenWidth > 768 ? "1440px" : "375px",
                flexDirection: screenWidth > 768 ? "row" : "column",
                gap: "20px",
            }}>
                {/* Nav Bar with logo */}
                <img src={iconGrab} alt="Grab Logo" width={screenWidth > 768 ? 150 : 80} style={{
                }} />
                <nav style={{
                    display: screenWidth > 768 ? "flex" : "none",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                    width: "100%",
                    marginLeft: screenWidth > 768 ? "26%" : "0",
                    padding: screenWidth > 768 ? "20px 0" : "0",
                    flexDirection: screenWidth > 768 ? "row" : "column",
                }}>
                    <a href="/">LOREM IPSUM</a>
                    <a href="/">LOREM IPSUM</a>
                    <a href="/">LOREM IPSUM</a>
                    <a href="/">LOREM IPSUM</a>
                    <a href="/">LOREM IPSUM</a>
                    <a href="/">LOREM IPSUM</a>
                </nav>
            </div>

        </header>
    );
}
export default Header;