import styles from "@/styles/Projects.module.css";
import Image, { StaticImageData } from "next/image";

interface Image {
  src: StaticImageData;
  alt: string;
}

interface ProjectsItem {
  image: Image;
  title: string;
  description: string;
  link: string;
  keywords: string;
}

interface ProjectsList {
  data: ProjectsItem;
}

export default function ProjectList(props: ProjectsList) {
  const { image, title, description, link, keywords } = props.data;

  return (
    <div className={styles.card}>
      <div className="img-box">
        <Image
          width={300}
          src={image.src}
          alt={image.alt}
          className="img-responsive"
        />
      </div>
      <div className={styles.cardDescription}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer">
          <i className="fas fa-external-link-alt fa-2x"></i>
        </a>
        <div className={styles.cardTech}>{keywords}</div>
      </div>
    </div>
  );
}
