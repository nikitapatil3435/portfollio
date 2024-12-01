import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Container } from "./styles";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Want to hire me? </p>
        <p>Contact me now</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:nikitapatil16497@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:nikitapatil16497@gmail.com">
            nikitapatil16497@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+919834683534">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+919834683534">(+91) 9834683534</a>
        </div>
      </div>
    </Container>
  );
}
