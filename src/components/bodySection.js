import React from "react";
import Jumbotron from "./bodyComponents/jumbotron";
import Navigation from "./bodyComponents/navigation";
import HotelSection from "./bodyComponents/hotelSection";

const BodySection = () => {
  return (
    <div className="body-section">
      <Jumbotron />

      <Navigation />

      <HotelSection />
    </div>
  );
};
export default BodySection;
