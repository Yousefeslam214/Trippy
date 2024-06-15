import Header from "../components/Header/Header"
import AboutImg from "../assets/night.jpg";
import Trip from "../components/Trip/Trip";

const Service = () => {
    return (
        <>
            <Header
                cName="hero-mid"
                heroImg={AboutImg}
                title="Service"
                btnClass="hide"
            />
            <Trip /></>
    )
}

export default Service
