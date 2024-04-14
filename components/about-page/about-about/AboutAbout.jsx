import React from "react";
import BooksBanner from '../../../public/assets/hero-img.png';
import SolutionStep from "./SolutionStep";
import "./about-about.css";
import Image from "next/image";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <Image src={BooksBanner} alt="Study Books" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to GVU PastQuestions, your academic success partner. We provide a seamless experience in accessing past examination questions and personalized study aids tailored to your academic needs.
        </p>

        <h4 className="about-text-title">Our Solutions</h4>

        <SolutionStep
          title="Comprehensive Database"
          description="Navigate through an extensive database of past questions across various disciplines and academic levels, curated for your success."
        />

        <SolutionStep
          title="Tailored Study Plans"
          description="Create personalized study schedules with our interactive tools, designed to adapt to your learning pace and style for effective preparation."
        />

        <SolutionStep
          title="Track Your Progress"
          description="Monitor your preparation with our progress tracking features. Gain insights into your strengths and areas that need improvement as you prepare for your exams."
        />
      </div>
    </div>
  );
}

export default About;
