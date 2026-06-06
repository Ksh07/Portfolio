import React from "react";
import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: "/images/p1.png",
    title: "Smart Interview Simulator",
    tags: ["LLM", "AI", "JavaScript"],
    projectLink: "https://github.com/Ksh07/Smart-Interview-Simulator-LLM-Based-",
  },
  {
        imgSrc: "/images/p2.png",

    title: "EduSync Slot Booking App",
    tags: ["MERN", "Booking", "Full Stack"],
    projectLink: "https://github.com/Ksh07/EduSync-Slot-Booking-App",
  },
  {
     imgSrc: "/images/p3.png",

    title: "URL Shortener Service",
    tags: ["Backend", "API", "NodeJS"],
    projectLink: "https://github.com/Ksh07/URL-Shortener-Service",
  },
  {
        imgSrc: "/images/p4.png",

    title: "My Product Store",
    tags: ["MERN", "Full Stack"],
    projectLink: "https://github.com/Ksh07/MyProductStore-MERN",
  },
  {
        imgSrc: "/images/p5.png",

    title: "Weather Whiz",
    tags: ["React", "API", "Responsive UI"],
    projectLink: "https://github.com/Ksh07/MYweatherApp",
  },
];

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8" reveal-up>Featured Projects</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(
            ({ imgSrc, title, tags, projectLink }, key) => (
                <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes='reveal-up'/>
                ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
