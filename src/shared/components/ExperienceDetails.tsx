import ReactMarkdown from 'react-markdown'
import { Experience } from "./ExperienceToggler";
import Image from "next/image";
import styles from "@/styles/Experience.module.css";

interface ExperienceDetailsProps {
  active: boolean;
  data: Experience;
}

export default function ExperienceDetails(props: ExperienceDetailsProps) {
  const { active } = props;
  const { companyName, role, date, logo, description, highlights } = props.data;

  return (
    <div
      className={`${active ? styles.descriptionActive : styles.description}`}
    >
      <Image src={logo} width={200} height={200} alt={`${companyName} logo`} />
      <div className={styles.text}>
        <div className={styles.meta}>
          <h3>
            {companyName} | {role}
          </h3>
          <p>{date}</p>
        </div>
        <div className={styles.details}>
          <ReactMarkdown>{description}</ReactMarkdown>
          <ul>
            {highlights.map((highlight, index) => (
              <li key={index}><ReactMarkdown>{highlight}</ReactMarkdown></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
