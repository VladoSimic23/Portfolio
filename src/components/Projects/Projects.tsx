import { projectsData } from "../../data";
import styles from "../../GlobalStyles/index.module.css";
import ProjectsDetails from "./ProjectsDetails";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.grid3}>
        {projectsData.map((project) => {
          const { id, image, projectUrl, githubUrl, title } = project;
          return (
            <ProjectsDetails
              key={id}
              id={id}
              image={image}
              projectUrl={projectUrl}
              githubUrl={githubUrl}
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
