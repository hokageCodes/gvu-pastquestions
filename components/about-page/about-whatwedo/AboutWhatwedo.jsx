import React from "react";
import AboutWhatwedoCard from '../../../components/about-page/about-whatwedo/AboutWhatwedoCard';
import { faBookOpen, faUserGraduate, faClock } from "@fortawesome/free-solid-svg-icons";
import "./whatwedo.css";

function AboutWhatwedo() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          Our platform is dedicated to providing students with comprehensive access to past examination questions and answers. We support academic success through resourceful study aids and efficient learning strategies.
        </p>
      </div>

      <div className="info-cards-content">
        <AboutWhatwedoCard
          title="Extensive Archive"
          description="Access a vast collection of past questions from various courses and levels of study. Our extensive archive is continuously updated to ensure you have the resources you need."
          icon={faBookOpen}
        />

        <AboutWhatwedoCard
          title="Student Success"
          description="We are committed to the academic success of every student. Our platform provides insights into examination trends, helping students to focus their revision effectively."
          icon={faUserGraduate}
        />

        <AboutWhatwedoCard
          title="Time Management"
          description="Improve your study sessions with timed quizzes and practice exams. Our tools help you manage your revision time effectively, ensuring you are well-prepared for your actual exams."
          icon={faClock}
        />
      </div>
    </div>
  );
}

export default AboutWhatwedo;
