import React from "react";
import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Frontend Framework",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
    desc: "Type Safety",
  },
  
  {
    imgSrc: "/images/redux.svg",
    label: "Redux",
    desc: "State Management",
  },

  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Core Language",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Backend Services",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Backend Framework",
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "PostgreSQL",
    desc: "Relational DB",
  },

  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "NoSQL Database",
  },
  {
    imgSrc: "/images/azure.svg", // when you download it
    label: "Azure DevOps",
    desc: "CI/CD & Boards",
  },

  {
    imgSrc: "/images/git.svg",
    label: "Git",
    desc: "Version Control",
  },
];

function Skill() {

    console.log(skillItem.map((item)=>{console.log(item);
    }));
    
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Technologies & Expertise</h2>

        <p className="text-zinc-400 mt-3 mb-8 reveal-up">
  Technologies, tools, and engineering practices I use to build scalable
  enterprise applications and production-ready solutions.
</p>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
                <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} classes="reveal-up"/>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Skill;
