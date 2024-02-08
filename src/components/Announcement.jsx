/* Import React icons */
import { CiStreamOn } from "react-icons/ci";
import { FaRegCirclePlay } from "react-icons/fa6";

/* Import Layout component */
import Layout from "./Layout";

/* Announcement component */
const Announcement = () => {
    /* Return JSX */
    return (
        <Layout backgroundColor="var(--green-primary)">
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                padding: 0,
                color: "var(--white-secondary)",
            }}>
                {/* Live indicator */}
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
                {/* Announcement text */}
                <span style={{
                    fontWeight: 100
                }}>Lorem ipsum dolor sit amet</span>
                {/* Join now button */}
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
        </Layout>
    )
}

/* Export Announcement component */
export default Announcement;
