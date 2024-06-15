import AboutImg from "../assets/2.jpg";
import ContactForm from "../components/Contact/ContactForm";
import Header from "../components/Header/Header";


function Contact() {
    return (
        <>
            <Header
                cName="hero-mid"
                heroImg={AboutImg}
                title="Contact"
                btnClass="hide"
            />
            <ContactForm />
        </>
    );
}

export default Contact;
