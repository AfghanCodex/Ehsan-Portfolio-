import ArrowIcon from "./ArrowIcon";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> SOFTWARE &amp; WEB DEVELOPER</p>
        <h1>
          Hello, I&apos;m
          <br />
          <span>Ehsan Ullah.</span>
          <br />
          I build for the web.
        </h1>
        <p className="hero-description">
          I&apos;m a developer from Afghanistan who turns ideas into useful,
          thoughtful digital experiences — from the first interface to the
          features behind it.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Start a conversation <ArrowIcon />
          </a>
          <a className="text-link" href="#services">
            Explore what I do <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-location">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M16.25 8.33c0 4.17-6.25 9.17-6.25 9.17S3.75 12.5 3.75 8.33a6.25 6.25 0 1 1 12.5 0Z" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="10" cy="8.25" r="2.1" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          Based in Afghanistan <span className="location-divider" /> Open to opportunities
        </div>
      </div>

      <div className="hero-visual" aria-label="Developer profile card">
        <div className="visual-grid" />
        <div className="visual-orbit orbit-a" />
        <div className="visual-orbit orbit-b" />
        <div className="visual-card">
          <div className="visual-card-top">
            <span className="window-dots"><i /><i /><i /></span>
            <span className="visual-card-label">A LITTLE ABOUT ME</span>
            <span className="visual-card-menu">•••</span>
          </div>
          <div className="profile-monogram">
            <span>EU</span>
            <span className="monogram-spark">✳</span>
          </div>
          <div className="visual-card-info">
            <p className="visual-greeting">NICE TO MEET YOU</p>
            <h2>Ehsan Ullah</h2>
            <p>Software &amp; Web Developer</p>
          </div>
          <div className="visual-card-footer">
            <span><span className="footer-dot" /> AVAILABLE FOR NEW PROJECTS</span>
            <span>AFG — 01</span>
          </div>
        </div>
        <div className="floating-code code-top">
          <span className="code-bracket">&lt;/&gt;</span>
          <span>thoughtful<br />by design</span>
        </div>
        <div className="floating-code code-bottom">
          <span className="code-check">✓</span>
          <span>built for<br />real people</span>
        </div>
        <span className="visual-caption">IDEAS INTO INTERFACES <span>↗</span></span>
      </div>

      <a className="scroll-cue" href="#about">
        <span className="scroll-cue-line" />
        A LITTLE MORE ABOUT ME
      </a>
      <span className="hero-index">01 / 05</span>
    </section>
  );
}
