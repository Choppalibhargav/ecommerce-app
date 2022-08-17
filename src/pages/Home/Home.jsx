import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Category from "../components/Category";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
//import Register from "./Register";
//import Login from "./Login";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Category />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
