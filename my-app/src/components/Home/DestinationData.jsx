import "./Destination.css";

const DestinationData = ({ className, heading, text, img1, img2 }) => {

    return (
        <div className={className}>
            <div className="des-text">
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
            <div className="image">
                <img src={img1} alt="img" />
                <img src={img2} alt="img" />
            </div>
        </div>
    );
}

export default DestinationData;
