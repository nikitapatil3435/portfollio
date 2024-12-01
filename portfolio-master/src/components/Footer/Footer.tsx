import githubIcon from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://ankitthapa.in" className="logo">
        
      </a>
      <div className="social-media">
      <a
              href="https://www.linkedin.com/in/nikita-patil-b244431b2/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/nikitapatil3435"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B919834683534&text=Hello+Nikita"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
      </div>
    </Container>
  );
}
