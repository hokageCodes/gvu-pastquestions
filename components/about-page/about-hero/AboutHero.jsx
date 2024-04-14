"use client"

import React, { useEffect, useState } from "react";
import BooksBanner from '../../../public/assets/hero-img.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import './about-hero.css';

function AboutHero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">📘 Unlock Academic Excellence</p>
          <h2 className="text-title">
            Access Past Questions for Effective Study
          </h2>
          <p className="text-description">
            Enhance your preparation with a vast repository of past questions and insightful answers. Streamline your study sessions with targeted practice.
          </p>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>10k+</p>
              <p>Questions Answered</p>
            </div>

            <div className="text-stats-container">
              <p>500+</p>
              <p>Exams Covered</p>
            </div>

            <div className="text-stats-container">
              <p>15+</p>
              <p>Years in Service</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          {/* Make sure to keep the original image styles as defined in your CSS */}
          <Image src={BooksBanner} alt="Library of Past Exam Questions" width={600} height={400} />
        </div>
      </div>

      <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default AboutHero;
