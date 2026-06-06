import WorkHistoryCard from "./WorkHistoryCard";

const workData = [
  {
    name: "Deloitte",
    designation: "Software Engineer - 1",
    logo: "/images/deloitte.png",
    summary:
      "Built scalable enterprise web applications using React, TypeScript, and TanStack Query. Developed reusable component libraries, implemented RBAC systems, integrated REST APIs, and optimized performance for data-intensive applications.",
    startTime: "Jul 2025",
    end: "present",
  },
  {
    name: "Deloitte",
    designation: "Software Engineer Intern",
    logo: "/images/deloitte.png",
    summary:
      "Developed reusable UI workflows, integrated frontend applications with backend services, worked with PostgreSQL, and contributed to scalable enterprise solutions used across multiple business modules.",
    startTime: "Jan 2025",
    end: "Jun 2025",
  },
  {
    name: "Training & Placement Cell, LNMIIT",
    designation: "Senior Executive",
    logo: "/images/tpc.png",
    summary:
      "Managed a team of 48 members and coordinated placement activities for 600+ students. Contributed to end-to-end placement operations, stakeholder coordination, and execution of campus recruitment drives.",
    startTime: "2023",
    end: "2025",
  },
];

const WorkHistory = () => {
  return (
    <section id="work-history" className="section py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 xl:max-w-6xl">
        <div className="mb-12 reveal-up">
          <h2 className="headline-2 text-3xl lg:text-4xl font-bold mb-4">
  Professional Experience
</h2>

<p className="text-muted-foreground max-w-2xl">
  Software engineering experience building scalable enterprise applications.
</p>
        </div>

        <div className="space-y-6">
          {workData.map((work, index) => (
            <div key={index} className="reveal-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <WorkHistoryCard {...work} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
