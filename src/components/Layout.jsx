import { useState } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });

    return (
        <>
            <div style={{
                margin: "0 auto",
                maxWidth: screenWidth > 768 ? "1440px" : "375px",
                padding: screenWidth > 768 ? "0 120px" : "0 20px",
                border: "1px solid red",
                background: 'transparent',
                overflow: "hidden",

            }}>
                {children}
            </div>
        </>
    );
}
export default Layout;