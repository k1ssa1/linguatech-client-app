import Contact from "../../components/forms/contact/Contact";
import Navbar from "../../components/navigation/navbar/Navbar";
import {Helmet} from "react-helmet";
import Services from "../../components/services/Services";

const Homepage = () => {
    return ( 
        <>
            <Helmet>
                <title>Linguatech - homepage</title>
            </Helmet>
            <Navbar/>
            <Services/>
            <Contact/>
        </>
     );
}
 
export default Homepage;