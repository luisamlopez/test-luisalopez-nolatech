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
                backgroundImage: props.backgroundImage ? props.backgroundImage : "transparent",
                overflow: "hidden",
                backgroundSize: "cover",
                height: props.height ? props.height : "auto",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: props.backgroundColor ? props.backgroundColor : "transparent",


            }}>

                {children}

            </div>
        </>
    );
}
export default Layout;