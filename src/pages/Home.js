import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our Application</h1>
        <p>Manage users, track activities, and enhance productivity with ease.</p>
      </header>

      <div className="button-container">
        <Link to="/counter" className="home-button">Go to Counter</Link>
        <Link to="/userform" className="home-button">Fill User Form</Link>
        <Link to="/editor" className="home-button">Open Text Editor</Link>
      </div>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🔹 Easy-to-use interface</li>
          <li>🔹 Seamless navigation</li>
          <li>🔹 Secure & Reliable</li>
          <li>🔹 Real-time updates</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
