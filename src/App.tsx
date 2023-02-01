import styles from "./GlobalStyles/index.module.css";
import { FaGithub } from "react-icons/fa";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Welcome</h1>
        <div className={styles.grid2}>
          <div className={styles.about}>
            <h2>About Me</h2>
            <div>
              <p>
                I am a 36-year-old Croatian living in Bosnia and Herzegovina
                with 4 years of studying a web development. I am fluent in both
                Croatian and English and have a passion for creating intuitive
                and engaging user experiences. My goal is to secure a position
                as a front-end developer where I can progress and utilize my
                skills to deliver exceptional results.
              </p>
              <p>
                Please note that I do not have commercial experience working as
                a full-time employee for a company, but I have gained experience
                through my personal projects and freelance work.
              </p>
            </div>
          </div>

          <div className={styles.skills}>
            <h2>Skills</h2>
            <div>
              <ul>
                <li>HTML</li>
                <li>Css / Sass</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>
                  React - hooks(ContextAPI, useReducer, custom hooks...), Redux
                  Toolkit
                </li>
                <li>Git</li>
                <li>Rest API</li>
                <li>Responsive Design</li>
              </ul>

              <div className={styles.additionalSkills}>
                <h3>Additional Skills</h3>
                <ul>
                  <li>Node Js / Express</li>
                  <li>Testing: React Testing Library / Jest</li>
                  <li>MongoDb</li>
                  <li>Firebase</li>
                  <li>CMS: Joomla, Wordpress</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default App;
