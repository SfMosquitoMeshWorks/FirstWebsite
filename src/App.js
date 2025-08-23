import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import Home from "./component/Home/home";
import AboutPage from "./component/About/about";
import CallButton from "./component/callBack/contactUS";
import WhyChoose from "./component/WhyChoose/WhyChoose";
import OurServices from "./component/OurServices/OurServices";
import FloatingButtons from "./component/FloatingButtons/FloatingButtons";



// import other components as needed

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<div><CallButton /></div>} />
        <Route path="/why-choose" element={<WhyChoose />} />
        <Route path="/services" element={<OurServices />} />


        {/* Add other routes here */}
      </Routes>
      <Footer />
      <FloatingButtons />
    </Router>
  );
}

export default App;
