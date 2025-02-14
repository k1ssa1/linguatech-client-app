import { Routes, Route } from "react-router";
import Homepage from "../apps/main/Homepage";
import Footer from "../components/navigation/footer/Footer";

const AppContainer = () => {
    return ( 
        <div>
            <Routes>
                <Route index element={<Homepage/>}/>
            </Routes>
            <Footer/>
        </div>
     );
}
 
export default AppContainer;