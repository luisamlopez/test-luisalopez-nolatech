import { useEffect, useState } from "react";

const Timer = () => {

    const [days, setDays] = useState(170);
    const [hours, setHours] = useState(13);
    const [minutes, setMinutes] = useState(39);
    const [seconds, setSeconds] = useState(0);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });


    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else if (hours > 0) {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
            } else if (days > 0) {
                setDays(days - 1);
                setHours(23);
                setMinutes(59);
                setSeconds(59);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [days, hours, minutes, seconds]);



    return <div
        style={{
            background: "#025923",
            color: "var(--white-secondary)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: screenWidth > 768 ? "row" : "column",
            gap: "10px",
            padding: "10px 30px",
        }}
    >
        <h3 style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: 0,
            width: screenWidth > 768 ? "20%" : "100%",
            textAlign: screenWidth > 768 ? "left" : "center",
        }}
        >Lorem ipsum dolor sit amet, consectetur</h3>

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: screenWidth > 768 ? "50px" : "10px",
                width: screenWidth > 768 ? "70%" : "100%",

            }}
        >

            <Container measure={"days"} time={days} />
            <Divider />
            <Container measure={"hours"} time={hours} />
            <Divider />
            <Container measure={"minutes"} time={minutes} />
            <Divider />
            <Container measure={"seconds"} time={seconds} />
        </div>


    </div>;
}

export default Timer;


const Divider = () => {
    return <div style={{
        width: "1.5px",
        height: "80px",
        background: "var(--green-primary)",
        margin: "20px 0",
    }}></div>
}

const Container = ({ time, measure }) => {

    return (
        <div style={{
            textAlign: "center",
            width: "fit-content",
        }}>
            <p style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                margin: 0,

            }}>{time}</p>
            <p
                style={{
                    fontSize: "1rem",
                    margin: 0,
                    color: "var(--green-primary)",
                }}
            >{measure}</p>
        </div>
    )
}
