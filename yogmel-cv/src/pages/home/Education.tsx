import styles from "@/styles/Education.module.css";

export default function Education() {
  return (
    <section className={`${styles.learning} container`}>
      <div>
        <h2>
          04.1 <span className="highlighted-text">Education</span>
        </h2>
        <div className={styles.meta}>
          <h3>Universidade Federal de Minas Gerais (UFMG)</h3>
          <p>Extension course - Software Engineer</p>
          <p>Remote | 2021</p>
        </div>
        <div className={styles.meta}>
          <h3>Universidade Estadual Paulista (UNESP)</h3>
          <p>Design Bachelor</p>
          <p>Bauru, SP - Brazil | 2011 - 2015</p>
        </div>
        <div className={styles.meta}>
          <h3>Parsons The New School for Design</h3>
          <p>Design and Technology Major Visiting Student</p>
          <p>New York, NY | Jan - Dec 2013</p>
        </div>
      </div>

      <div className={styles.courses}>
        <h2>
          04.2 <span className="highlighted-text">Courses</span>
        </h2>
        <ul>
          <li>
            Advanced Javascript - <span className="t-lighter">Udemy</span>
          </li>
          <li>
            Node.js developer course - <span className="t-lighter">Udemy</span>
          </li>
          <li>
            React Native The Practical Guide -
            <span className="t-lighter">Udemy</span>
          </li>
          <li>
            Advanced CSS and Sass - <span className="t-lighter">Udemy</span>
          </li>
          <li>
            React Developer Course - <span className="t-lighter">Udemy</span>
          </li>
          <li>
            Sprint Artificial Intelligence -
            <span className="t-lighter">Programaria + Intel</span>
          </li>
          <li>
            Pocket Course Machine Learning -
            <span className="t-lighter">Itaú</span>
          </li>
          <li>
            Introduction to IoT -
            <span className="t-lighter">Cisco Networking Academy</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
