import Navbar from "../../components/navigation/navbar/Navbar";
import {Helmet} from "react-helmet";

const Homepage = () => {
    return ( 
        <>
            <Helmet>
                <title>Linguatech - homepage</title>
            </Helmet>
            <Navbar/>
            <h1>Homepage</h1>
        </>
     );
}
 
export default Homepage;