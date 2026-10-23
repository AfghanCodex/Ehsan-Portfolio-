import ArrowIcon from "./ArrowIcon";
import "./Services.css";

const capabilities = [
  {
    number: "01",
    title: "Websites that feel considered",
    description:
      "Professional, responsive websites that make a clear first impression and work beautifully across screen sizes.",
    tags: ["Responsive design", "Landing pages", "Business websites"],
  },
  {
    number: "02",
    title: "Interfaces made for people",
    description:
      "Thoughtful frontend experiences with clear navigation, accessible patterns, and the small details that make a product feel right.",
    tags: ["React", "Next.js", "UI implementation"],
  },
  {
    number: "03",
    title: "Full-stack foundations",
    description:
      "Useful application features connected to APIs and databases, built with an eye toward maintainability and growth.",
    tags: ["Laravel", "Node.js", "Databases & APIs"],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span className="section-number">02</span>
              <span>HOW I CAN HELP</span>
            </div>
            <h2>Thoughtful work.<br /><span>Practical outcomes.</span></h2>
          </div>
          <p className="section-heading-note">
            From a first web presence to a full-stack application, I bring
            curiosity, care, and a clear process to every build.
          </p>
        </div>

        <div className="capability-list">
          {capabilities.map((item) => (
            <article className="capability-row" key={item.number}>
              <span className="capability-number">{item.number}</span>
              <div className="capability-main">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="capability-tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <span className="capability-arrow" aria-hidden="true"><ArrowIcon diagonal /></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
