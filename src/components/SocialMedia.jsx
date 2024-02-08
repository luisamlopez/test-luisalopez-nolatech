import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const style = {
    borderBottom: '2px solid #8E8E8D',
    padding: '0px 5px 8px 5px',
    width: '100%',
}

const SocialMedia = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: 'column',
                gap: '10%',
                position: 'fixed',
                backgroundColor: '#9A9A9A',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                height: '235px',
                width: '30px',
                top: '150px',
                right: 0,
                padding: '8px',
                zIndex: 1000,
            }}>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={style}>
                <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" style={style}>
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={style}>
                <FaInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" style={style}>
                <TfiYoutube />
            </a>

            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" style={style}>
                <FaTiktok />
            </a>

        </div>
    )
}

export default SocialMedia;
