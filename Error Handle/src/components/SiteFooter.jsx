import ArrowIcon from "./ArrowIcon";
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-profile">
          <a className="wordmark footer-wordmark" href="#home" aria-label="Ehsan Ullah, back to top">
            <span className="wordmark-icon">E.</span>
            <span className="wordmark-name">Ehsan Ullah</span>
          </a>
          <p>
            Software &amp; web developer creating thoughtful digital
            experiences from Afghanistan.
          </p>
          <span className="footer-location"><span className="footer-location-dot" /> BASED IN AFGHANISTAN</span>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <h2>EXPLORE</h2>
          <a href="#about">About me</a>
          <a href="#services">What I do</a>
          <a href="#skills">My skills</a>
          <a href="#process">My process</a>
        </nav>

        <div className="footer-contact">
          <h2>HAVE A PROJECT IN MIND?</h2>
          <a className="footer-email" href="mailto:ahsanullahafghan.email@gmail.com">
            ahsanullahafghan.email@gmail.com <ArrowIcon diagonal />
          </a>
          <a className="footer-cta" href="#contact">
            Get in touch <ArrowIcon />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} EHSAN ULLAH. ALL RIGHTS RESERVED.</span>
        <span className="footer-made">DESIGNED &amp; BUILT WITH CARE</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
