import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="hero-content">
          <h1>"Your feelings are valid"</h1>
          <p>
            HarmonyCare is your personalized path to mental well-being. We combine the power of AI-Powered chatbots with the soothing sounds of music therapy, all in a convenient telehealth platform. This innovative approach provides you with 24/7 support and personalized guidance, wherever you are on your mental health journey!
          </p>
          <div className="buttons">
            <button className="btn watch-video" onClick={openModal}>USER GUIDE</button>
          </div>

          {isModalOpen && (
            <div className="modal" onClick={closeModal}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close-button" onClick={closeModal}>&times;</span>
                <img src="src/assets/USER GUIDE.png" alt="User Guide" className="user-guide-image" />
              </div>
            </div>
          )}
        </div>
        <div className="hero-image">
          <img src="src/assets/Hero.png" alt="Mental Health Illustration" />
        </div>
      </header>
      <section className="services">
        <div className="service-box find-therapist">
          <h2>Find a Therapist</h2>
          <p>
            Browse our directory of qualified therapists, each with their own unique areas of expertise. Learn about their approach and qualifications to find the perfect fit for your needs.
          </p>
          <img src="src/assets/therapist-find.jpg" alt="Find a Therapist" />
        </div>
        <div className="service-box connect-therapist">
          <h2>Connect with a Therapist</h2>
          <p>
            Our secure audio and video conferencing platform provides a safe and private space to connect with your therapist in real-time. Talk openly and honestly about anything on your mind, fostering a supportive and therapeutic relationship.
          </p>
          <img src="src/assets/video-conference.jpg" alt="Connect with a Therapist" />
        </div>
        <div className="service-box peppybuddy">
          <h2>PeppyBuddy - Your AI Companion</h2>
          <p>
            Meet PeppyBuddy, HarmonyCare's friendly AI chatbot. Trained specifically to support mental health, PeppyBuddy offers empathetic and insightful advice, along with a touch of humor. Think of PeppyBuddy as your virtual friend, always available for a conversation or a pick-me-up.
          </p>
          <img src="src/assets/PeppyBuddy.jpg" alt="PeppyBuddy - Your AI Companion" />
        </div>
        <div className="service-box chat-therapist">
          <h2>Chat with Therapist</h2>
          <p>
            Connect with your chosen therapist through our secure chat function. This allows you to inquire about their availability for a counseling session at your convenience.
          </p>
          <img src="src/assets/therapist-chat.jpg" alt="Chat with Therapist" />
        </div>
        <div className="service-box music-therapy">
          <h2>Music Therapy</h2>
          <p>
            Unwind and find solace with our personalized music therapy feature. HarmonyCare curates music selections specifically tailored to your needs and preferences, creating a calming and restorative experience.
          </p>
          <img src="src/assets/music-therapy.jpg" alt="Music Therapy" />
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="http://localhost:5173/">Home</a>
            <a href="http://127.0.0.1:5501/index.html">Find a Therapist</a>
            <a href="http://localhost:5174/">Chat with Therapist</a>
            <a href="http://127.0.0.1:5500/HarmonyCare/Ihsh_HarmonyCare/lobby.html">Connect with Therapist</a>
            <a href="http://localhost:5175/">PeppyBuddy and Music Therapy</a>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>
          <div className="footer-contact">
            <p>Contact us: support@harmonycare.com | +1 234 567 890</p>
            <p>© 2024 HarmonyCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
