import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";

const sections = [
  {
    title: "PermaLinks",
    items: ["Home", "About", "Past Questions", "Contact"],
  },
  {
    title: "Privacy",
    items: ["Privacy Policy", "Terms & Condition"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-slate-900 text-gray-300 py-8">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 px-4">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-gray-500 hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <p className="font-bold uppercase">GVU PastQuestions</p>
          <p className="py-4">
            Your Gateway to success, Access a wealth of past questions on our platform. Elevate your preparation with proven exam insights, topic guidance, and time management practice. Empowering students to excel in exams and embrace a brighter academic future.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center text-gray-500 py-4 sm:text-left">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-center sm:justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((item, index) => {
            return <a href={item.link} key={index} className="hover:text-white"><item.icon /></a>;
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
