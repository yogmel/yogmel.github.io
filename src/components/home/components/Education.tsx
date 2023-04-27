import EducationList from "@/shared/components/EducationList";
import styles from "@/styles/Education.module.css";
import { educationData, coursesData } from "@/data";

export default function Education() {
  return (
    <section className={`${styles.learning} container`}>
      <div>
        <h2>
          04.1 <span className="highlighted-text">Education</span>
        </h2>
        <EducationList
          type="education"
          styles={styles.meta}
          data={educationData}
        />
      </div>

      <div className={styles.courses}>
        <h2>
          04.2 <span className="highlighted-text">Courses</span>
        </h2>
        <EducationList type="course" data={coursesData} />
      </div>
    </section>
  );
}
