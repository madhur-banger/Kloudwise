"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import Loader from "./Loader";
import "./heroSection.css";

export default function HeroSection() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  const [refOne, inViewOne] = useInView({ threshold: 0.1 });
  const [refTwo, inViewTwo] = useInView({ threshold: 0.1 });
  const [refThree, inViewThree] = useInView({ threshold: 0.1 });

  const fadeOutLeft = {
    exit: { opacity: 0, x: -100 },
  };

  const fadeOutRight = {
    exit: { opacity: 0, x: 100 },
  };

  // State variables for loading and submission
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const resetForm = () => {
    setIsSubmitted(false);
    setMiniFormData({
      name: "",
      email: "",
      message: "",
      phoneNumber: "",
      budget: "",
    });
  };

  // Mini form state and handlers
  const [miniFormData, setMiniFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    budget: "",
  });

  const handleMiniFormChange = (e) => {
    setMiniFormData({ ...miniFormData, [e.target.name]: e.target.value });
  };

  const handleMiniFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(miniFormData),
    });

    const data = await response.json();
    setIsLoading(false);

    e.preventDefault();
  
    // Extract form data
    const { name, phoneNumber, budget, message } = miniFormData;
  
    // Construct the WhatsApp URL with encoded parameters
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+918850283085&text=${encodeURIComponent(
      `Hello, My name is ${name}. I am interested in a project with a budget of ${budget}. Here are the details: ${message}`
    )}`;
  
    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, "_blank");
  
    // Optional: If needed, you can reset the form here
    setMiniFormData({
      name: "",
      email: "",
      message: "",
      phoneNumber: "",
      budget: "",
    });

    
  };

  return (
    <>
      <section className="hero_coporate_agency" id="#home">
        <div className="container">
          <div className="content cstm_content_mob">
            <div
              className="section_title cstm_sect_title_mob"
            >
              <motion.h1
                className="hero_title"
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.1 }}
              >
                Design
                <span style={{ color: "var(--red-dark-clr)" }}> </span>{" "}
                Develop
                <span style={{ color: "var(--red-dark-clr)" }}> </span>{" "}
                Market
                <span style={{ color: "var(--red-dark-clr)" }}> </span>{" "}
                <span style={{ color: "var(--green-dark-clr)" }}>
                  Buisness
                </span>
              </motion.h1>
              <motion.p
                className="wow fadeInLeft"
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                <b style={{ color: "var(--red-dark-clr)" }}>Kloudwise </b>
                helps you right from <b>Web</b>,
                <b> Mobile App</b> to complete <b>infrastructure</b>{" "}
                development.
                {/* <br />
                {" "}{" "}We design, develop, makret your buisness&apos;s digital presence. */}

              </motion.p>
              <motion.a
                href="#contact-section"
                className="bg_btn"
                variants={fadeInLeft}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
              >
                Contact Us <FontAwesomeIcon icon={faArrowRight} />
              </motion.a>
            </div>
            {/* Mini Form */}
                       {/* Professional Business Analytics Dashboard */}
                       <div className="tech_logos_container">
              {/* Central Analytics Dashboard */}
              <motion.div
                className="central_chart"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Dashboard Header */}
                <div className="dashboard_header">
                  <div className="header_left">
                    <div className="status_indicator"></div>
                    <span className="dashboard_title">Business Analytics</span>
                  </div>
                  <div className="metric_badges">
                    <span className="badge badge_success">↑ 24%</span>
                    <span className="badge badge_info">Live</span>
                  </div>
                </div>

                {/* Main Chart Area */}
                <svg viewBox="0 0 320 180" className="growth_chart">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'var(--green-dark-clr)', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: 'var(--green-dark-clr)', stopOpacity: 0.05 }} />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'var(--green-dark-clr)', stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: 'var(--green-dark-clr)', stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Grid Lines */}
                  <g className="grid_lines" opacity="0.15">
                    <line x1="30" y1="20" x2="310" y2="20" stroke="#666" strokeWidth="0.5" strokeDasharray="2,2"/>
                    <line x1="30" y1="50" x2="310" y2="50" stroke="#666" strokeWidth="0.5" strokeDasharray="2,2"/>
                    <line x1="30" y1="80" x2="310" y2="80" stroke="#666" strokeWidth="0.5" strokeDasharray="2,2"/>
                    <line x1="30" y1="110" x2="310" y2="110" stroke="#666" strokeWidth="0.5" strokeDasharray="2,2"/>
                    <line x1="30" y1="140" x2="310" y2="140" stroke="#666" strokeWidth="0.5" strokeDasharray="2,2"/>
                  </g>

                  {/* Y-axis labels */}
                  <g className="axis_labels" fontSize="9" fill="#666">
                    <text x="22" y="23" textAnchor="end">100K</text>
                    <text x="22" y="53" textAnchor="end">80K</text>
                    <text x="22" y="83" textAnchor="end">60K</text>
                    <text x="22" y="113" textAnchor="end">40K</text>
                    <text x="22" y="143" textAnchor="end">20K</text>
                  </g>

                  {/* X-axis labels */}
                  <g className="axis_labels" fontSize="9" fill="#666">
                    <text x="50" y="158" textAnchor="middle">Jan</text>
                    <text x="90" y="158" textAnchor="middle">Feb</text>
                    <text x="130" y="158" textAnchor="middle">Mar</text>
                    <text x="170" y="158" textAnchor="middle">Apr</text>
                    <text x="210" y="158" textAnchor="middle">May</text>
                    <text x="250" y="158" textAnchor="middle">Jun</text>
                    <text x="290" y="158" textAnchor="middle">Jul</text>
                  </g>

                  {/* Bar Chart (Background Layer) */}
                  <g className="bar_chart" opacity="0.4">
                    <rect x="45" y="100" width="8" height="45" fill="rgba(0, 128, 0, 0.3)" rx="2"/>
                    <rect x="85" y="90" width="8" height="55" fill="rgba(0, 128, 0, 0.3)" rx="2"/>
                    <rect x="125" y="75" width="8" height="70" fill="rgba(0, 128, 0, 0.4)" rx="2"/>
                    <rect x="165" y="85" width="8" height="60" fill="rgba(0, 128, 0, 0.3)" rx="2"/>
                    <rect x="205" y="60" width="8" height="85" fill="rgba(0, 128, 0, 0.5)" rx="2"/>
                    <rect x="245" y="55" width="8" height="90" fill="rgba(0, 128, 0, 0.5)" rx="2"/>
                    <rect x="285" y="40" width="8" height="105" fill="rgba(0, 128, 0, 0.6)" rx="2"/>
                  </g>
                  
                  {/* Area under the line */}
                  <motion.path
                    d="M 50 120 L 90 105 L 130 85 L 170 95 L 210 60 L 250 50 L 290 30 L 290 145 L 50 145 Z"
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />

                  {/* Main Growth Line with smooth curve */}
                  <motion.path
                    d="M 50 120 C 65 115, 75 108, 90 105 C 105 102, 115 88, 130 85 C 145 82, 155 93, 170 95 C 185 97, 195 75, 210 60 C 225 45, 235 52, 250 50 C 265 48, 275 35, 290 30"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  />

                  {/* Data points with animated appearance */}
                  <motion.circle
                    cx="50" cy="120" r="4" fill="#fff" stroke="var(--green-dark-clr)" strokeWidth="2.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring" }}
                  />
                  <motion.circle
                    cx="90" cy="105" r="4" fill="#fff" stroke="var(--green-dark-clr)" strokeWidth="2.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9, type: "spring" }}
                  />
                  <motion.circle
                    cx="130" cy="85" r="4" fill="#fff" stroke="var(--green-dark-clr)" strokeWidth="2.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1, type: "spring" }}
                  />
                  <motion.circle
                    cx="170" cy="95" r="4" fill="#fff" stroke="var(--green-dark-clr)" strokeWidth="2.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3, type: "spring" }}
                  />
                  <motion.circle
                    cx="210" cy="60" r="4" fill="#fff" stroke="var(--green-dark-clr)" strokeWidth="2.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                  />
                  <motion.circle
                    cx="250" cy="50" r="4" fill="#fff" stroke="var(--green-dark-clr)" strokeWidth="2.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7, type: "spring" }}
                  />
                  <motion.circle
                    cx="290" cy="30" r="5" fill="var(--green-dark-clr)" stroke="#fff" strokeWidth="2"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      boxShadow: ["0 0 0 0 rgba(0, 128, 0, 0.7)", "0 0 0 10px rgba(0, 128, 0, 0)", "0 0 0 0 rgba(0, 128, 0, 0)"]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: 2
                    }}
                  />

                  {/* Tooltip on last point */}
                  <motion.g
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                  >
                    <rect x="265" y="8" width="48" height="18" rx="4" fill="var(--green-dark-clr)" opacity="0.95"/>
                    <text x="289" y="19" fontSize="10" fill="#fff" fontWeight="600" textAnchor="middle">$94.5K</text>
                  </motion.g>
                </svg>

                {/* Bottom Stats */}
                <div className="chart_stats">
                  <div className="stat_item">
                    <span className="stat_label">Revenue</span>
                    <span className="stat_value">$94.5K</span>
                  </div>
                  <div className="stat_item">
                    <span className="stat_label">Growth</span>
                    <span className="stat_value growth_positive">+24.3%</span>
                  </div>
                  <div className="stat_item">
                    <span className="stat_label">Clients</span>
                    <span className="stat_value">2,847</span>
                  </div>
                </div>
              </motion.div>

              {/* Professional Business Icons */}
              <motion.div
                className="floating_logo logo_1"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="icon_wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
              </motion.div>

              <motion.div
                className="floating_logo logo_2"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                <div className="icon_wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
              </motion.div>

              <motion.div
                className="floating_logo logo_3"
                animate={{
                  y: [0, -18, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              >
                <div className="icon_wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </motion.div>

              <motion.div
                className="floating_logo logo_4"
                animate={{
                  y: [0, 14, 0],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9,
                }}
              >
                <div className="icon_wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
              </motion.div>

              <motion.div
                className="floating_logo logo_5"
                animate={{
                  y: [0, -16, 0],
                }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <div className="icon_wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
              </motion.div>

              <motion.div
                className="floating_logo logo_6"
                animate={{
                  y: [0, 13, 0],
                }}
                transition={{
                  duration: 2.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="icon_wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
              </motion.div>

              <motion.div
                className="floating_logo logo_7"
                animate={{
                  y: [0, -14, 0],
                }}
                transition={{
                  duration: 3.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              >
                <div className="icon_wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
              </motion.div>

              <motion.div
                className="floating_logo logo_8"
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 2.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              >
                <div className="icon_wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
              </motion.div>

              {/* Glowing particles */}
              <motion.div
                className="particle particle_1"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="particle particle_2"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="particle particle_3"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
                  
                

              <motion.div
                className="particle particle_3"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>


          </div>
      </section>
    </>
  );
}
