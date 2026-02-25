import React from 'react';
import './App.css';
import { useState, useEffect } from "react";

// Import emailjs
import emailjs from "emailjs-com";

// Import assets
import logo from './assets/Mylogo.png';
import profileImg from './assets/profile.jpg';
import cvFile from './assets/DiyanaCV.pdf';
import traampImg from './assets/Project1.png';
import feedImg from './assets/Project2.png';
import trafficImg from './assets/Project3.png';
import qrImg from './assets/Project4.jpg';
import portfolioImg from './assets/Project5.png';
import weatherImg from './assets/Project6.png';
import westminsterLogo from './assets/westminster.jpg'; 
import schoolLogo from './assets/school.jpg';

// Import fa icons 
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa';

// Projects
const projects = [
  {
    title: "Traamp Landing Page",
    image:traampImg,
    desc: "Traamp is a second year group project where my team and I are creating a tourism guide platform for Sri Lanka. We have completed the Traamp landing page, which introduces the app, highlights key features, and helps users discover popular travel destinations. This project strengthened my skills in frontend development, responsive design, and teamwork.",
    tags: ["NextJs", "TypeScript", "TailwindCSS"],
    links: {github: "#" , website: "https://traamp.com"}
  },
  {
    title: "Feed The Future Website",
    image: feedImg,
    desc: "A group project website created for United Nations Sustainable Development Goal (SDG) 2: Zero Hunger, developed as part of the Web Design and Development coursework. The site raises awareness about global hunger, highlights key SDG goals, and presents solutions through a clean, informative user interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {github: "https://github.com/Diyana1111/Feed-The-Future-Web-Site"}
  },
  {
    title: "Traffic Data Analyzer",
    image: trafficImg,
    desc: "A Python-based application that analyzes CSV traffic datasets to extract insights such as peak hours, vehicle counts, and traffic patterns. Includes automated data processing, text report generation, and visualizations using histograms. Designed with a menu-driven interface to support multiple datasets and repeated analysis",
    tags: ["Python", "CSV", "Tkinter"],
    links: {github: "https://github.com/Diyana1111/Traffic-Data-Analyzer"}
  },
  {
    title: "QR Code Generator & Reader",
    image: qrImg,
    desc: "A simple Python project that lets users generate and read QR codes using the qrcode, Pillow, and pyzbar libraries. It can create QR codes from any text or URL, save them as images, and scan existing QR code images to extract the embedded information.",
    tags: ["Python", "Pyzbar", "Pillow"],
    links: {github: "https://github.com/Diyana1111/QR-Code-Generator-and-Reader"}
  },
  {
    title: "Portfolio Website",
    image: portfolioImg,
    desc: "This is my personal portfolio built with React and CSS, created to showcase my skills, projects, and experience as a frontend developer. It highlights my work, provides a quick view of my abilities, and serves as a platform for future internship opportunities.",
    tags: ["ReactJs", "CSS"],
    links: {github: "https://github.com/Diyana1111/My-Portfolio-Website" , website: "https://diyana1111.github.io/My-Portfolio-Website/"}
  },
  {
    title: "SkyNow – Weather Forecast Website",
    image: weatherImg,
    desc: "Weather website that retrieves and displays real-time weather data based on user input. Implemented API integration, input validation, dynamic UI updates, loading states, error handling, and weather icons to provide an interactive and user-friendly experience.",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    links: {github: "https://github.com/Diyana1111/Weather-Website"}
  },
];

// Skills
const skillsData = {
  Frontend: [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  ],
  Backend: [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  ],
  Database: [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  ],
  "Tools & Other": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Visual Studio Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    { name: "Google Colab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg" },
    { name: "NetBeans", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netbeans/netbeans-original.svg" },
  ]
};

// Education
const educationData = [
  {
    institution: "University of Westminster",
    degree: "BEng(Hons) Software Engineering (Undergraduate)",
    duration: "2024 - Present",
    logo: westminsterLogo
  },
  {
    institution: "Sanghamitta Balika Vidyalaya, Galle",
    degree: "Primary & Secondary Education",
    duration: "2010 - 2023",
    logo: schoolLogo
  }
];

// EmailJS
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_j7mk1ug",
    "template_bww92a8",
    e.target,
    "j9Su--wHMw29kmPaZ"
  )
  .then(() => {
    alert("Message Sent Successfully!");
  })
  .catch(() => {
    alert("Failed to send message.");
  });

  e.target.reset();
};

function App() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'DiyanaCV.pdf';
    link.click();
  };

  const [showTop,setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {

    const handleScroll = () => {

      if(window.scrollY > 300){
        setShowTop(true);
      }else{
        setShowTop(false);
      }

      const sections = ["home","projects","skills","education","contact"];
      

      sections.forEach((section)=>{
        const element = document.getElementById(section);

        if(element){
          const position = element.offsetTop - 200;

          if(window.scrollY >= position){
            setActiveSection(section);
          }
        }
      });

    };

    window.addEventListener("scroll",handleScroll,{passive:true});

    return ()=> window.removeEventListener("scroll",handleScroll);

  },[]);

  return (
    <div className="portfolio-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="DS Logo" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#home" className={activeSection==="home" ? "active" : ""}>Home</a></li>
          <li><a href="#projects" className={activeSection==="projects" ? "active" : ""}>Projects</a></li>
          <li><a href="#skills" className={activeSection==="skills" ? "active" : ""}>Skills</a></li>
          <li><a href="#education" className={activeSection==="education" ? "active" : ""}>Education</a></li>
          <li><a href="#contact" className={activeSection==="contact" ? "active" : ""}>Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section id='home' className="hero-section">
        <div className="hero-content">
          
          <div className="profile-column">
            <div className="image-circle">
              <img src={profileImg} alt="Diyana" className="main-photo" />
            </div>
          </div>

          <div className="text-column">
            <h1 className="name">Diyana Jayasekara</h1>
            <h2 className="role">Software Engineer Undergraduate</h2>
            <p className="description">
              I’m Diyana, a second-year Software Engineering undergraduate student. 
              I specialize in backend, frontend, and mobile application development, 
              working with Java, Python, React.js, Flutter, HTML, CSS, and JavaScript. 
              I’m passionate about creating clean, responsive, and user-friendly digital 
              solutions, and I enjoy building real-world projects that solve problems 
              and make an impact.
            </p>
            <button className="download-btn" onClick={handleDownload}>
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <div className="card-image">
                 <img src={proj.image} alt={proj.title} />
              </div>
              <div className="card-content">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="tag-container">
                  {proj.tags.map(tag => <span key={tag} className='tag'>{tag}</span>)}
                </div>
                <div className="card-actions">
                  <a href={proj.links.github} target="_blank" rel="noopener noreferrer">
                    <button className="github-btn">View On GitHub</button>
                  </a>

                  {proj.links.website && (
                    <a href={proj.links.website} target="_blank" rel="noopener noreferrer">
                      <button className="web-link">View Website</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">Skills</h2>
        
        {Object.entries(skillsData).map(([category, items]) => (
          <div key={category} className="skill-category-wrapper">
            <h3 className="category-name">{category}</h3>
            <div className="skills-grid">
              {items.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon-container">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  </div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      {/* EDUCATION SECTION */}
      <section id="education" className="education-section">
        <h2 className="section-title">Education</h2>
        
        <div className="education-list">
          {educationData.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="edu-dot"></div>

              <div className="edu-card-content">
                <div className="edu-text-side">
                  <span className="edu-date">{edu.duration}</span>
                  <h3 className="edu-institution">{edu.institution}</h3>
                  <h4 className="edu-degree">{edu.degree}</h4>
                </div>

                <div className="edu-logo-side">
                  <img src={edu.logo} alt={`${edu.institution} logo`} className="edu-university-logo" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-container">
          {/* Contact Icons */}
          <div className="quick-actions">
            <a href="mailto:senadidiyana@gmail.com" className="action-circle" title="Email Me">
              <FaEnvelope />
            </a>
            <a href="tel:+94704518909" className="action-circle" title="Call Me">
              <FaPhone />
            </a>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label>Name <span className="required">*</span></label>
              <input name='name' type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email <span className="required">*</span></label>
              <input name='email' type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input name='subject' type="text" placeholder="Enter subject" />
            </div>

            <div className="form-group">
              <label>Message <span className="required">*</span></label>
              <textarea name='message' rows="5" placeholder="Enter your message" required></textarea>
            </div>

            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/diyana-senadi-jayasekara-65b0a4324" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Diyana1111" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/d_s_11_11?igsh=MWdtaHYxZDNhN211NQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/1B5KWxpYTg/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><FaFacebook /></a>
          </div>

          <p className="footer-copy">© 2026 Diyana Jayasekara. All rights reserved.</p>
        </div>
      </footer>
      {showTop && (
        <button className="top-button" onClick={goTop}>
          ↑
        </button>
)}
    </div>
  );
}

export default App;