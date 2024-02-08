import { useState } from "react";

const Layout = ({ children, ...props }) => {
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
                background: props.background ? props.background : "transparent",
                overflow: "hidden",
                backgroundSize: "cover",
                height: props.height ? props.height : "auto",


            }}>

                {children}

            </div>
        </>
    );
}
export default Layout;