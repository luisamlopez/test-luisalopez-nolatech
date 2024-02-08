import { useState, useEffect } from "react";

const Carousel = ({ pictures }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current + 1) % pictures.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [current, pictures.length]);

    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <div style={{ display: "flex", transition: "transform 0.5s ease", marginLeft: `calc((100% - 300px) / 2)` }}>
                {pictures.map((picture, index) => (
                    <img
                        key={index}
                        src={picture}
                        alt={`carousel-${index}`}
                        style={{
                            width: "300px",
                            height: "auto",
                            marginLeft: index === 0 ? "0" : "-290px",
                            transform: `translateX(${100 * (index - current)}%)`,
                            transition: "transform 0.5s ease",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                            zIndex: index === current ? "1" : "0", // Hace que la imagen actual esté en el frente
                        }}
                    />
                ))}
            </div>

            {/* Marcadores */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "40px" }}>
                {pictures.map((_, index) => (
                    <div
                        key={index}
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: current === index ? "var(--green-primary)" : "var(--white-secondary)",
                            cursor: "pointer",
                        }}
                        onClick={() => setCurrent(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
