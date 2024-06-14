import "./HomeHero.css";

const HomeHero = ({ cName, heroImg, title, text, btnClass, url, buttonText }) => {
    return (
        <>
            <div className={cName}>
                <img src={heroImg} alt='heroImg' />
                <div className='hero-text'>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <a className={btnClass} href={url}>
                        {buttonText}
                    </a>
                </div>
                {/* <h1>Your Journey Your Story</h1>
                <p>Choose Your Favourite Destination.</p>
                <a href="index.html">Travel Plan</a> */}
            </div>
        </>
    )
}

export default HomeHero
