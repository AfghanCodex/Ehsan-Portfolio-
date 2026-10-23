import "./Process.css";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We start with your goals, your audience, and what success should look like.",
  },
  {
    number: "02",
    title: "Plan & design",
    description: "I map out a clear structure and a visual direction before building.",
  },
  {
    number: "03",
    title: "Build",
    description: "I turn the plan into a responsive, polished, and dependable experience.",
  },
  {
    number: "04",
    title: "Refine & deliver",
    description: "We review the details, make improvements, and get your work ready to launch.",
  },
];

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="section-wrap">
        <div className="section-heading process-heading">
          <div>
            <div className="section-label">
              <span className="section-number">04</span>
              <span>FROM FIRST THOUGHT TO LAUNCH</span>
            </div>
            <h2>A clear process.<br /><span>No guesswork.</span></h2>
          </div>
          <p className="section-heading-note">
            Good collaboration is built on clear communication. Here&apos;s
            what working together looks like.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
