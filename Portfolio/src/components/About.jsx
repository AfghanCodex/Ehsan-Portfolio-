import ArrowIcon from "./ArrowIcon";
import "./About.css";

export default function About() {
  return (
    <section className="intro-section section-wrap" id="about">
      <div className="section-label">
        <span className="section-number">01</span>
        <span>THE PERSON BEHIND THE PIXELS</span>
      </div>
      <div className="intro-content">
        <h2>
          Good work starts with
          <br />
          <span>understanding the why.</span>
        </h2>
        <div className="intro-text">
          <p>
            I&apos;m Ehsan Ullah, a software developer specializing in web
            development. I enjoy shaping ideas into clear, easy-to-use
            websites and applications that look good and work reliably.
          </p>
          <p>
            I work across frontend and backend technologies, choosing the
            right tools for the problem and keeping the people who will use
            the product at the center of every decision.
          </p>
          <a className="inline-link" href="#contact">
            Have an idea in mind? Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}
