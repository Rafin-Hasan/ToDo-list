import React, { useEffect } from "react";
import Lottie from "lottie-react";
import todo from "../../../public/Animation/Animation - 1729900344054.json";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <section className="container">
      <div className="flex-container">
        <div className="text-section" data-aos="fade-right">
          <h1>Welcome back!</h1>
          <h2>To your todo list</h2>
          <p>
            Make a perfect to-do list for your daily life and make your life
            more punctual and easier.
          </p>
          <Link to="/todo" className="get-started-button" data-aos="zoom-in">
            Get Started
          </Link>
        </div>
        <div className="animation-container" data-aos="fade-left">
          <Lottie animationData={todo} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Home;
