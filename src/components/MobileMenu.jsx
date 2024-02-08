import { IoMdClose } from "react-icons/io";

const MobileMenu = ({ openMenu, closeMenu }) => {

    return (
        <div>
            <nav style={{
                display: openMenu ? "flex" : "none",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                width: "fit-content",
                flexDirection: "column",
                position: "absolute",
                backgroundColor: "var(--green-primary)",
                padding: "20px",
                gap: "20px",
                margin: "0 auto",
                top: "100px",
                left: "0",
                right: "0",

            }}>
                <a href="/">LOREM IPSUM</a>
                <a href="/">LOREM IPSUM</a>
                <a href="/">LOREM IPSUM</a>
                <a href="/">LOREM IPSUM</a>
                <a href="/">LOREM IPSUM</a>
                <a href="/">LOREM IPSUM</a>
                <IoMdClose onClick={closeMenu} color="#fff" fontSize={24} />
            </nav>
        </div>
    );
}
export default MobileMenu;