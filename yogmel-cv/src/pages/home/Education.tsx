import EducationList from "@/components/EducationList";
import styles from "@/styles/Education.module.css";

const educationData = [
  {
    institution: "Universidade Federal de Minas Gerais (UFMG)",
    course: "Extension course - Software Engineer",
    location: "Remote | 2021",
  },
  {
    institution: "Universidade Estadual Paulista (UNESP)",
    course: "Design Bachelor",
    location: "Bauru, SP - Brazil | 2011 - 2015",
  },
  {
    institution: "Parsons The New School for Design",
    course: "Design and Technology Major Visiting Student",
    location: "New York, NY | Jan - Dec 2013",
  },
];

const coursesData = [
  {
    course: "Advanced Javascript",
    institution: "Udemy",
  },
  {
    course: "Node.js developer course",
    institution: "Udemy",
  },
  {
    course: "React Native The Practical Guide",
    institution: "Udemy",
  },
  {
    course: "Advanced CSS and Sass",
    institution: "Udemy",
  },
  {
    course: "React Developer Course",
    institution: "Udemy",
  },
  {
    course: "Sprint Artificial Intelligence",
    institution: "Programaria + Intel",
  },
  {
    course: "Pocket Course Machine Learning",
    institution: "Itaú",
  },
  {
    course: "Introduction to IoT",
    institution: "Cisco Networking Academy",
  },
];

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
        <EducationList type="education" data={coursesData} />
      </div>
    </section>
  );
}
