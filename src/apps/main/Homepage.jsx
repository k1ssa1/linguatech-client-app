import Contact from "../../components/forms/contact/Contact";
import Navbar from "../../components/navigation/navbar/Navbar";
import {Helmet} from "react-helmet";
import Services from "../../components/services/Services";
import Hero from "../../components/hero/Hero";
import Pricing from "../../components/pricing/Pricing";

const Homepage = () => {
    return ( 
        <>
            <Helmet>
                <title>Linguatech - homepage</title>
            </Helmet>
            <Navbar/>
            <Hero/>
            <Services/>
            <Pricing/>
            <Contact/>
        </>
     );
}
 
export default Homepage;