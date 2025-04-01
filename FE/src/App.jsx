import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Comment from "./components/Comments/Comments";
import TourListInside from "./components/TourList/TourListInside";
import TourListOutside from "./components/TourList/TourListOutside";
import BookingForm from "./components/TourList/BookingForm";
import Choice from "./components/Choice/Choice"
import Management from "./components/TourManagement/TourManagement";

const Home = () => (
  <>
    <Hero />
    <Comment />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inside" element={<TourListInside />} />
            <Route path="/outside" element={<TourListOutside />} />
            <Route path="/booking/:id" element={<BookingForm />} />
            <Route path="/management" element={<Management />} />
            <Route path="/choice" element={<Choice />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
