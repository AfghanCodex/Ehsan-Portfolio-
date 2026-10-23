import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    description: "Accessible, responsive interfaces built with care.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    number: "01",
  },
  {
    title: "Backend",
    description: "Reliable application logic and practical APIs.",
    skills: ["PHP", "Laravel", "Node.js", "Express.js"],
    number: "02",
  },
  {
    title: "Data & tools",
    description: "Working with data, version control, and design.",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "Figma"],
    number: "03",
  },
];

export default function Skills() {
  return (
    <section className="skills-section section-wrap" id="skills">
      <div className="skills-heading">
        <div>
          <div className="section-label">
            <span className="section-number">03</span>
            <span>TOOLS OF THE TRADE</span>
          </div>
          <h2>A toolkit for<br /><span>building good things.</span></h2>
        </div>
        <p>
          Technologies I work with to bring digital products from concept
          to launch.
        </p>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.number}>
            <div className="skill-group-top">
              <span>{group.number}</span>
              <span className="skill-group-mark">↗</span>
            </div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-tags">
              {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
