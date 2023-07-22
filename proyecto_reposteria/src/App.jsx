import React from "react";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom"
import Login from "./Pages/Login";
import Registro from "./Pages/Registro";
import Home from "./Pages/Home";

export const App = () => {
    return(
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Registro" element={<Registro/>}/>
                    <Route path="/Home" element={<Home/>}/>
                </Routes>
            </Router>
        </React.StrictMode>

    )
}

export default App