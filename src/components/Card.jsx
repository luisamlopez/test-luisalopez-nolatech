const Card = ({ title, image }) => {
    return (
        <div style={{
            width: "100%",
            height: "auto",
            textAlign: "center",
            gap: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",

        }} >
            <img src={image} alt={title} style={{
                width: "100%",
                height: "auto",
                margin: "0",
            }} />

            <p style={{
                background: "var(--green-primary)",
                margin: "0",
                width: "100%",
                padding: "20px 0",
                color: "var(--white-secondary)",
                fontSize: "1.5rem",
                fontWeight: "bolder",
            }}>{title}</p>

        </div>
    );
}

export default Card;