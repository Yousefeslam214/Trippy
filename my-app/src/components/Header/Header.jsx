import "./Header.css";

const Header = ({ cName, heroImg, title, text, btnClass, url, buttonText }) => {
    return (
        <>
            <div className={cName}>
                <img src={heroImg} alt="heroImg" />
                <div className="hero-text">
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <a className={btnClass} href={url}>
                        {buttonText}
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header
