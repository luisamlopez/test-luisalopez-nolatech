import { useEffect, useState } from "react";
import Layout from "./Layout";

// Timer component
const Timer = () => {
    // State for days, hours, minutes, and seconds
    const [days, setDays] = useState(170);
    const [hours, setHours] = useState(13);
    const [minutes, setMinutes] = useState(39);
    const [seconds, setSeconds] = useState(0);

    // State for screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Event listener to update screen width on resize
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });

    // Effect to handle countdown timer
    useEffect(() => {
        const interval = setInterval(() => {
            // Update seconds
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            // Update minutes
            else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
            // Update hours
            else if (hours > 0) {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
            }
            // Update days
            else if (days > 0) {
                setDays(days - 1);
                setHours(23);
                setMinutes(59);
                setSeconds(59);
            }
        }, 1000);
        // Cleanup function to clear interval
        return () => clearInterval(interval);
    }, [days, hours, minutes, seconds]);

    // Return JSX
    return (
        <Layout backgroundColor="#025923">
            <div style={{
                color: "var(--white-secondary)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: screenWidth > 768 ? "row" : "column",
                gap: "10px",
                padding: "10px 0px",
            }}>
                {/* Header */}
                <h3 style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    margin: 0,
                    width: screenWidth > 768 ? "20%" : "100%",
                    textAlign: screenWidth > 768 ? "left" : "center",
                }}>Lorem ipsum dolor sit amet, consectetur</h3>
                {/* Timer container */}
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: screenWidth > 768 ? "50px" : "10px",
                    width: screenWidth > 768 ? "70%" : "100%",
                }}>
                    {/* Components for displaying days, hours, minutes, and seconds */}
                    <Container measure={"days"} time={days} />
                    <Divider />
                    <Container measure={"hours"} time={hours} />
                    <Divider />
                    <Container measure={"minutes"} time={minutes} />
                    <Divider />
                    <Container measure={"seconds"} time={seconds} />
                </div>
            </div>
        </Layout>
    );
};

// Divider component
const Divider = () => {
    return <div style={{
        width: "1.5px",
        height: "80px",
        background: "var(--green-primary)",
        margin: "20px 0",
    }}></div>;
};

// Container component for displaying time and measure
const Container = ({ time, measure }) => {
    return (
        <div style={{
            textAlign: "center",
            width: "fit-content",
        }}>
            {/* Display time */}
            <p style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                margin: 0,
            }}>{time}</p>
            {/* Display measure */}
            <p style={{
                fontSize: "1rem",
                margin: 0,
                color: "var(--green-primary)",
            }}>{measure}</p>
        </div>
    );
};

// Export Timer component
export default Timer;
