import iconGrab from "../assets/icongrab.png";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    /* State for screen width */
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    /* Event listener for screen resize */
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });

    /* State for mobile menu */
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    /* Close mobile menu */
    const onCloseMobileMenu = () => {
        setOpenMobileMenu(false);
    }

    /* Open mobile menu */
    const onOpenMobileMenu = () => {
        setOpenMobileMenu(true);
    }

    /* Return header JSX */
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
                justifyContent: "center",
                width: "100%",
                maxWidth: screenWidth > 768 ? "1440px" : "375px",
                gap: "20px",
            }}>
                {/* Logo */}
                <img src={iconGrab} alt="Grab Logo" width={screenWidth > 768 ? 150 : 80} style={{
                }} />

                {/* Mobile menu icon */}
                <IoMenu display={screenWidth > 768 ? 'none' : 'block'} onClick={onOpenMobileMenu} color="var(--green-primary)" fontSize={24} />

                {/* Navigation */}
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

                {/* Mobile menu component */}
                <MobileMenu openMenu={openMobileMenu} closeMenu={onCloseMobileMenu} />
            </div>

        </header>
    );
}

/* Export Header component */
export default Header;
