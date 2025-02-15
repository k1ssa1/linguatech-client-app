import Contact from "../../components/forms/contact/Contact";
import Navbar from "../../components/navigation/navbar/Navbar";
import {Helmet} from "react-helmet";
import Services from "../../components/services/Services";
import Hero from "../../components/hero/Hero";
import Pricing from "../../components/pricing/Pricing";
import Testimonials from "../../components/testimonials/Testimonials";

const Homepage = () => {
    return ( 
        <>
            <Helmet>
                <title>Top online English courses & coaching - Linguatech</title>
                <meta name="description" content="Discover linguatech, a plateform offering effiecient English courses online. Discover our services and pricing. Read our latest testimonalis. Enroll in our program by filling our form." />
                <meta name="description" content="Best English courses, Online English coaching, English tutoring services, Enrollment form" />
            </Helmet>
            <Navbar/>
            <Hero/>
            <Services/>
            <Pricing/>
            <Testimonials/>
            <Contact/>
        </>
     );
}
 
export default Homepage;