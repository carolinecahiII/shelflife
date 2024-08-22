import "../Styles/Cards.css";
import Button from "./Button";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Want to know more?</h1>

      <p>
        Type in your email below for updates on Shelf Life and Bad Librarian Studios.
      </p>
      <div className="form-container">
        <form className="contact-form">
          <input
            type="email"
            id="contact-email"
            name="contact-email"
            placeholder="Enter your email"
            required
          />
          <Button text="Send" type="submit" />
          <br /><br />
          <div className="socials">
            <a href="mailto:badlibrarianstudios@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/email-open.png" alt="Email" />
            </a>
            <a href="https://www.instagram.com/badlibrarianstudios" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn0.iconfinder.com/data/icons/social-media-entertainment-line/32/Instagram-512.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/bad-librarian/about/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://discord.gg/JUVc9xB7kE" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn0.iconfinder.com/data/icons/social-media-entertainment-line/32/Discord-512.png" alt="Discord" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
