const Button = ({ children, ...props }) => {
    return (
        <button {...props} style={{
            ...props.style
        }}>
            {children}
        </button>
    );
}
export default Button;
