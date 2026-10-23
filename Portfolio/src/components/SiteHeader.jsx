import { useState } from "react";
import ArrowIcon from "./ArrowIcon";
import "./SiteHeader.css";

function ThemeIcon({ theme }) {
  return theme === "light" ? (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3.3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 1.8v2m0 12.4v2m8.2-8.2h-2M3.8 10h-2m14-5.8-1.4 1.4M5.6 14.4l-1.4 1.4m11.6 0-1.4-1.4M5.6 5.6 4.2 4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M16.7 12.4A7.1 7.1 0 0 1 7.6 3.3a7.2 7.2 0 1 0 9.1 9.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteHeader({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Ehsan Ullah, home">
        <span className="wordmark-icon">E.</span>
        <span className="wordmark-name">Ehsan Ullah</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>What I do</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#process" onClick={closeMenu}>Process</a>
      </nav>

      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          <ThemeIcon theme={theme} />
          <span className="theme-toggle-label">{theme === "light" ? "Light" : "Dark"}</span>
        </button>
        <a className="header-contact" href="#contact">
          Let&apos;s talk <ArrowIcon diagonal />
        </a>
      </div>
    </header>
  );
}
