import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type HeaderProps = {
  onLoginClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  useEffect(() => {
    const base = document.querySelector("header") as HTMLElement;
    if (!base) return;

    const handleScroll = () => {
      base.classList.toggle("sticky", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id='head'>
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
          <a onClick={onLoginClick}><button>Login</button></a>
        </div>
      </div>
    </header>
  );
};

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
          <span>Revolutionize Fleet Management with Our Cutting-Edge Driver Monitoring System! </span>
          Take control of your fleet like never before. Our advanced driver behavior tracking system enables supervisors and administrators to effortlessly monitor and optimize driver performance.
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
          <span><i className="fa-solid fa-car"></i></span> <span>Stay in Control</span>: Track every driver’s journey with detailed trip records and daily performance scores.
        </p>
        <p>
          <span><i className="fa-solid fa-phone"></i></span> <span>Effortless Mobile Experience</span>: Drivers can easily log their trips and get immediate feedback through our intuitive mobile app.
        </p>
        <p>
          <span><i className="fa-solid fa-earth-americas"></i></span> <span>Comprehensive Web Management</span>: Manage teams and access in-depth reports through our platform.
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
          <span>Diagnose Issues Instantly</span>: Stay ahead of vehicle maintenance with real-time fault detection.
        </p>
        <p>
          <span>Smart Alerts</span>: Get instant notifications and insights when faults are detected.
        </p>
        <p>
          <span>Comprehensive Reporting</span>: Track recurring issues and plan maintenance easily.
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
      Your fleet’s safety is our top priority. Become part of our solution today and enjoy the peace of mind that comes with knowing your drivers are well-cared for.
    </p>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://trucktive.runasp.net/api/ContactUs", {
        name: formData.fullName,
        companyName: formData.company,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });
      toast.success("Message sent successfully!");
      setFormData({ fullName: "", company: "", phone: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <section className="secForm">
      <div className="imgTex">
        <img src="/Home_img/forms.jpg" alt="car" />
      </div>
      <div className="form">
        <div className="us"><h3>Contact Us</h3></div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Enter Your Full Name.." value={formData.fullName} onChange={handleChange} required />

          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" placeholder="Enter Your Company Name.." value={formData.company} onChange={handleChange} required />

          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" placeholder="Enter Your Phone.." value={formData.phone} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter Your Email.." value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter Your Message" value={formData.message} onChange={handleChange} required > </textarea>

          <div className="sned">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </section>
  );
};

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
  const loginClick = () => dashNavigate("/login-page");

  return (
    <div className="cont">
      <ToastContainer />
      <Header onLoginClick={loginClick} />
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
        Embark on a journey with us towards safer roads, streamlined operations, and happier drivers.
      </p>
      <JoinSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomeApp;
