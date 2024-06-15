import "./Trip.css";

function TripData({ image, heading, text }) {
    return (
        <div
        >
            <div className="t-image">
                <img src={image} alt="trip" />
            </div>
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    );
}

export default TripData;
