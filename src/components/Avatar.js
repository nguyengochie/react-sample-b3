
const Avatar = (props) => {
    const { link, alt, alert } = props;

    return <div
        onClick={alert}
        style={{
            border: "2px solid white",
            borderRadius: "50%", width: "100px",
            height: "100px", overflow: "hidden"
        }}>
        <img style={{ height: "100%" }}
            src={link}
            alt={alt} />
    </div>
}
export default Avatar;