import { useState } from "react";
import { CiStreamOn } from "react-icons/ci";
import { FaRegCirclePlay } from "react-icons/fa6";


const Announcement = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });
    return (
        <div style={{
            background: "var(--green-primary)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            padding: 0,
            color: "var(--white-secondary)",
        }}>
            <span style={{
                background: 'red',
                padding: '6.5px',
                fontWeight: 'bold',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                height: '100%',
                cursor: 'pointer',

            }}>LIVE <CiStreamOn size={"24px"} />
            </span>
            <span style={{
                fontWeight: 100
            }}>Lorem ipsum dolor sit amet</span>
            <span style={{
                background: '#07913B',
                padding: '8px 10px',
                fontWeight: 'bold',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                fontSize: '12px',
                cursor: 'pointer',

            }}>JOIN NOW! <FaRegCirclePlay size={"20px"} /></span>
        </div>
    )
}

export default Announcement;