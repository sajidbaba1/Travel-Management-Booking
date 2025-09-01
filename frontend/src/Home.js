import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <div className="hero-section">
          <h1>Your Journey Begins Here</h1>
          <p>The ultimate travel companion for seamless booking and management.</p>
          <button className="cta-button">Plan Your Trip</button>
        </div>
      </header>

      <main>
        <section className="features-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Easy Booking</h3>
              <p>Book flights, hotels, and cars in minutes with our intuitive interface.</p>
            </div>
            <div className="feature-card">
              <h3>Best Deals</h3>
              <p>Access exclusive deals and discounts from our extensive network of partners.</p>
            </div>
            <div className="feature-card">
              <h3>24/7 Support</h3>
              <p>Our dedicated support team is available around the clock to assist you.</p>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <h2>Benefits for You</h2>
          <ul>
            <li><strong>Save Time:</strong> Manage all your bookings in one place.</li>
            <li><strong>Travel Smarter:</strong> Get personalized recommendations and insights.</li>
            <li><strong>Peace of Mind:</strong> Enjoy a stress-free travel experience with our reliable service.</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Travel Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
