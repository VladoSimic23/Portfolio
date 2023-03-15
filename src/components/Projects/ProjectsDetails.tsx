import styles from "../../GlobalStyles/index.module.css";
import { FaGithub } from "react-icons/fa";
import { DataI } from "../../data";

const ProjectsDetails = ({ projectUrl, githubUrl, image }: DataI) => {
  return (
    <div className={styles.projectParent}>
      <img src={image} alt="cart" />
      <div className={styles.projectLinks}>
        <div>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <FaGithub /> Github
          </a>
          <br />
          <a href={projectUrl} target="_blank" rel="noreferrer">
            Live Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
