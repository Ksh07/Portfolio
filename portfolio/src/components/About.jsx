import React from "react";

const aboutItems = [ { label: "Major projects done", number: 7, }, { label: "Years of experience", number: 1, }, ];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-6 md:mb-8 text-base md:text-lg leading-relaxed max-w-4xl">
           Software Engineer at Deloitte, building scalable enterprise applications across frontend and backend systems using React, TypeScript, and modern web technologies.
            Experienced in designing reusable component libraries,
            implementing secure RBAC systems, integrating REST APIs, and
            optimizing application performance.
           <br />
           <br />
          Beyond engineering, I enjoy cricket, badminton, and exploring new destinations on two wheels.
          </p>

          <div className="flex flex-wrap items-center gap-8">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-3xl font-semibold md:text-5xl">
                    {number}
                  </span>

                  <span className="text-sky-400 font-semibold md:text-4xl">
                    +
                  </span>
                </div>

                <p className="text-sm md:text-base text-zinc-400">
                  {label}
                </p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              className="ml-auto md:w-10 md:h-10 opacity-70"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;