import ArrowIcon from "./ArrowIcon";
import "./Contact.css";

export default function Contact() {
  function handleContactSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = `Portfolio inquiry from ${name}`;
    const body = `Hi Ehsan,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;

    window.location.href = `mailto:ahsanullahafghan.email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-intro">
        <div className="section-label">
          <span className="section-number">05</span>
          <span>HAVE SOMETHING IN MIND?</span>
        </div>
        <h2>Let&apos;s make<br />it <span>happen.</span></h2>
        <p>
          Have a project, an opportunity, or just want to say hello? I&apos;d
          love to hear from you.
        </p>
        <a className="contact-email" href="mailto:ahsanullahafghan.email@gmail.com">
          ahsanullahafghan.email@gmail.com <ArrowIcon diagonal />
        </a>
        <div className="contact-availability">
          <span className="status-dot" /> OPEN TO WORK &amp; COLLABORATION
        </div>
      </div>

      <form className="contact-form" onSubmit={handleContactSubmit}>
        <div className="form-heading">
          <h3>Send a message</h3>
          <p>Tell me a little about what you have in mind.</p>
        </div>
        <label htmlFor="contact-name">YOUR NAME</label>
        <input id="contact-name" name="name" type="text" placeholder="How should I call you?" required />
        <label htmlFor="contact-email">EMAIL ADDRESS</label>
        <input id="contact-email" name="email" type="email" placeholder="you@example.com" required />
        <label htmlFor="contact-message">A LITTLE ABOUT YOUR PROJECT</label>
        <textarea id="contact-message" name="message" rows="4" placeholder="What are you looking to build?" required />
        <button className="button button-primary form-submit" type="submit">
          Write your email <ArrowIcon />
        </button>
        <p className="form-note">This opens your email app with your message ready to send.</p>
      </form>
    </section>
  );
}
