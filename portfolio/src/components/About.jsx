import React from "react";

const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of experience",
    number: 10,
  },
];
function About() {
  return (
    <section id="about" className="section">
      <div className="">
        <p className="">
          {" "}
          Welcome! I&apos;m Kshitij, a professional web developer with a knack
          for crafting visually stunning and highly functional websites.
          Combining creativity and technical expertise. I transform your vision
          into digital masterpiece that excels in both appearance and
          performance.
        </p>{" "}
        <div className="">
          {aboutItems.map(({ label, number }, key) => (
            <div key={key}>
                
                <div className="">

                    <span className="">{number}</span>

                    <span className="">+</span>

                </div>
                <p className="">{label}</p>
                 </div>
          ))}

          <img src="/images/logo.svg" alt="Logo" className="" width={30} height={30}/>
        </div>
      </div>
    </section>
  );
}

export default About;
