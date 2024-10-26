import React from "react";
import Lottie from "lottie-react";
import todo from "../../../public/Animation/Animation - 1729900344054.json";
import ".//Home.css";

const Home = () => {
  return (
    <section className="container">
      <div className="flex-container">
        <div className="text-section">
          <h1>Welcome back!</h1>
          <h2>To your todo list</h2>
          <p>
            Make a perfect to-do list for your daily life and make your life
            more punctual and easier.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
        <div className="animation-container">
          <Lottie animationData={todo} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Home;
