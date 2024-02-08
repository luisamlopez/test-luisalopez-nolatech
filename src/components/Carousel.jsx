import { useState, useEffect } from "react";

// Carousel component
const Carousel = ({ pictures }) => {
    // State for current index of the carousel
    const [current, setCurrent] = useState(0);

    // Effect to handle automatic sliding of the carousel
    useEffect(() => {
        // Interval to change current index periodically
        const interval = setInterval(() => {
            setCurrent((current + 1) % pictures.length);
        }, 3000);

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, [current, pictures.length]);

    // Return JSX
    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            {/* Container for carousel images */}
            <div style={{ display: "flex", transition: "transform 0.5s ease", marginLeft: `calc((100% - 300px) / 2)` }}>
                {/* Mapping through pictures array to render images */}
                {pictures.map((picture, index) => (
                    <img
                        key={index}
                        src={picture}
                        alt={`carousel-${index}`}
                        style={{
                            width: "300px",
                            height: "auto",
                            marginLeft: index === 0 ? "0" : "-290px", // Adjusting margin for images
                            transform: `translateX(${100 * (index - current)}%)`, // Applying transform based on current index
                            transition: "transform 0.5s ease",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                            zIndex: index === current ? "1" : "0", // Ensuring current image is in the front
                        }}
                    />
                ))}
            </div>

            {/* Indicators for carousel */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "40px" }}>
                {/* Mapping through pictures array to render indicators */}
                {pictures.map((_, index) => (
                    <div
                        key={index}
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: current === index ? "var(--green-primary)" : "var(--white-secondary)", // Styling based on current index
                            cursor: "pointer",
                        }}
                        onClick={() => setCurrent(index)} // Setting current index on click
                    ></div>
                ))}
            </div>
        </div>
    );
};

// Export Carousel component
export default Carousel;
