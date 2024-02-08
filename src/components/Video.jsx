import { IoPlayCircleOutline } from "react-icons/io5";

const Video = ({ image, title }) => {
    return (
        <div style={{
            width: "250px",
            textAlign: "center",
            gap: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

        }} >
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                height: "150px",
                width: "100%",
            }}>

                <IoPlayCircleOutline style={{
                    fontSize: "3rem",
                    marginTop: "50px",
                    color: "var(--white-secondary)",
                    cursor: "pointer",

                }} />
            </div>


            <p style={{
                margin: "0",
                width: "100%",
            }}>{title}</p>
        </div>
    )
}

/**Export video card component */
export default Video;