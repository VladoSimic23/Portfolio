import styles from "../../GlobalStyles/index.module.css";

const Skills = () => {
  return (
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
            Toolkit, Zustand
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
  );
};

export default Skills;
