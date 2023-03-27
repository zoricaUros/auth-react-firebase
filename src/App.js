import React from "react";
import Navbar from "./components/Navbar";
import Naslovna from "./pages/Naslovna";
import Kursevi from "./pages/Kursevi";
import Kontakt from "./pages/Kontakt";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App () {
    return (
        <Router>
            <div>
                <Navbar />
                  <Routes>
                     <Route path="/" element={<Naslovna />} />
                     <Route path="/kursevi" element={<Kursevi />} />
                     <Route path="/kontakt" element={<Kontakt />} /> 
                 </Routes> 
            </div>
        </Router>
    )
}
           

       

       
      
    







       
            
    

