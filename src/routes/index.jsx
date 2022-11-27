import { BrowserRouter,Routes,Route } from "react-router-dom";
import {HomeView,LoginView,RegisterView} from "../pages";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/login" element={<LoginView/>}/>
            <Route path="/register" element={<RegisterView/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;