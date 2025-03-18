// import React from 'react';
// import './HomePage.css';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

type HeaderProps = {
  onLoginClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => (
  
  <header>
    <div className="logo">
    <img src="/src/assets/logo.png" alt="Logo" />
    </div>
    <div className="sidieLink">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="logBtn">
        {/* <button onClick={onLoginClick}>Login</button> */}
        <a  onClick={onLoginClick}><button>Login</button></a>
      </div>
    </div>
  </header>
);

const SectionOne = () => (
  <section className="secOne">
    <div className="texOne">
      <h1><span>Feel</span> Free For Your Fleets, Now You Can Fully Monitor Your Drivers And Manage Them Easily</h1>
    </div>
    <div className="imgOne">
      <img src="/Home_img/image.png" alt="image" />
    </div>
  </section>
);

const SectionTwo = () => (
  <>
    <p className="description">“Transform Your Fleet Management with Advanced Driver Monitoring”</p>
    <section className="secTow">
      <div className="texTwo">
        <p>
          Revolutionize Fleet Management with Our Cutting-Edge Driver Monitoring System! Take control of your fleet like never before. Our advanced driver behavior tracking system enables supervisors and administrators to effortlessly monitor and optimize driver performance. From smooth acceleration to safe braking and everything in between, our platform offers real-time insights and actionable analytics. Elevate safety, boost efficiency, and maximize the performance of your entire fleet with our powerful solution.
        </p>
      </div>
      <div className="imgTwo">
        <img src="/Home_img/pexels-kagan-bastimar-1754822-3325651.jpg" alt="photo" />
      </div>
    </section>
  </>
);

const SectionThree = () => (
  <>
    <p className="description">“Effective Fleet Management: Driver Tracking & Mobile Experience”</p>
    <section className="secThree">
      <div className="imgThree">
        <img src="/Home_img//istockphoto-859916128-612x612 1.png" alt="" />
      </div>
      <div className="texThree">
        <p>
          <span><i className="fa-solid fa-car"></i></span> Stay in Control: Track every driver’s journey with detailed trip records and daily performance scores. Our system gives supervisors a full overview of driving behaviors, empowering them to make data-driven decisions to improve safety and efficiency.
        </p>
        <p>
          <span><i className="fa-solid fa-phone"></i></span> Effortless Mobile Experience: Drivers can easily log their trips and get immediate feedback through our intuitive mobile app. Supervisors can communicate seamlessly with drivers, ensuring smooth collaboration and enhanced productivity.
        </p>
        <p>
          <span><i className="fa-solid fa-earth-americas"></i></span> Comprehensive Web Management: With our easy-to-use web platform, supervisors can manage teams, create accounts, and dive into in-depth reports. Take charge of your fleet’s operations and drive success with streamlined, web-based control.
        </p>
      </div>
    </section>
  </>
);

const SectionFour = () => (
  <>
    <p className="description">“Proactive Fleet Maintenance: Real-Time Diagnostics & Alerts”</p>
    <section className="secFour">
      <div className="texFour">
        <p>
          Diagnose Issues Instantly: Stay ahead of vehicle maintenance with our advanced fault detection system. Identify potential problems in real-time, reducing downtime and preventing costly repairs. Empower your team to act quickly and keep your fleet running smoothly.
        </p>
        <p>
          Smart Alerts: Our system provides instant notifications when a fault is detected, giving you detailed insights into the issue. From engine warnings to system malfunctions, you’ll always know what’s happening under the hood.
        </p>
        <p>
          Comprehensive Reporting: Access in-depth reports on vehicle health and performance through our intuitive platform. Plan maintenance schedules, track recurring issues, and ensure your fleet stays in top condition with minimal effort.
        </p>
      </div>
      <div className="imgFour">
        <img src="/Home_img//sec.jpg" alt="" />
      </div>
    </section>
  </>
);

const JoinSection = () => (
  <div className="joTex">
    <p className="jo1">Join Us Now</p>
    <p className="jo2">
      Your fleet’s safety is our top priority. Become part of our solution today and enjoy the peace of mind that comes with knowing your drivers are well-cared for. Drive smarter, manage more efficiently!
    </p>
  </div>
);

const ContactForm = () => (
  <section className="secForm">
    <div className="imgTex">
      <img src="/Home_img/forms.jpg" alt="car" />
    </div>
    <div className="form">
      <div className="us"><h3>Contact Us</h3></div>
      <form action="#">
        <label htmlFor="fname">Full Name</label>
        <input type="text" id="fname" name="fullname" placeholder="Enter Your Full Name.." />
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" placeholder="Enter Your Company Name.." />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" placeholder="Enter Your Phone.." />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Your Email.." />
        <label htmlFor="messenger">Message</label>
        <textarea id="messenger" name="messenger" placeholder="Enter Your Message"></textarea>
        <div className="sned">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="col1">
      <h4>Company</h4>
      <a href=""> About Us</a>
      <a href=""> Contact Us</a>
      <a href=""> Our Service</a>
      <a href=""> Privacy Policy</a>
      <a href=""> Term & condition</a>
    </div>
    <div className="col2">
      <h4>Company</h4>
      <a href="#"><i className="fa-solid fa-location-dot"></i> 165 Street, Cairo, Egypt</a>
      <p>+012 890 94073</p>
      <a href="#"><i className="fa-regular fa-envelope"></i> info.Tructive@example.com</a>
      <div className="links">
        <a href="#" className="face"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" className="lin"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#" className="insta"><i className="fa-brands fa-instagram"></i></a>
        <a href="#" className="yotube"><i className="fa-brands fa-youtube"></i></a>
      </div>
    </div>
    <div className="col3">
      <h4>Newsletter</h4>
      <p>Let us send you news and updates straight to your inbox</p>
    </div>
  </footer>
);

const HomeApp = () => { 
   
  const dashNavigate = useNavigate();
  const loginClick = () => {
    dashNavigate("/login-page");
  }

  return(
  <div className="cont">
    <Header onLoginClick= {loginClick} />
    <div className="textMain">
      <div>
        <h1>Unleash Your Fleet's Full Potential</h1>
        <h3>Driving Fleet Empowerment</h3>
      </div>
    </div>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <p className="info">
      Embark on a journey with us towards safer roads, streamlined operations, and happier drivers. Experience a new era in driver behavior tracking — where data drives performance!
    </p>
    <JoinSection />
    <ContactForm />
    <Footer />
  </div>
); }

export default HomeApp;