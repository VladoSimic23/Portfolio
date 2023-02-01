import styles from "../../GlobalStyles/index.module.css";
import { FaGithub } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div>
        <a
          href="https://github.com/VladoSimic23?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className={styles.mail}>
        <a href="mailto:vladosimic525@gmail.com">vladosimic525@gmail.com</a>
      </div>
    </div>
  );
};

export default ContactInfo;
