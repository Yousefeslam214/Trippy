import Header from '../components/Header/Header'

import AboutImg from "../assets/night.jpg";
import AboutUs from '../components/About/AboutUs';

const About = () => {
    return (
        <><Header
            cName="hero-mid"
            heroImg={AboutImg}
            title="About"
            btnClass="hide"
        />
            <AboutUs />

        </>
    )
}

export default About
