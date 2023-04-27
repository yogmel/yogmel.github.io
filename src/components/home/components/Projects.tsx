import styles from "@/styles/Projects.module.css";
import ProjectList from "@/shared/components/ProjectsList";
import { projectData } from "@/data";

export default function Projects() {
  return (
    <section className={`${styles.projects} container`}>
      <h2>
        05. <span className="highlighted-text">Projects</span>
      </h2>
      <div className={styles.box}>
        {projectData.map(item => (
          <ProjectList key={item.title} data={item} />
        ))}
      </div>
    </section>
  );
}
