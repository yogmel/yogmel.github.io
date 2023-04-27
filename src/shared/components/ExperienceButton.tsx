import styles from "@/styles/Experience.module.css";
import { Experience } from "./ExperienceToggler";

interface ExperienceButtonProps {
  active: boolean;
  name: string;
  onClick: (chosenExperience: Experience) => void;
  experience: Experience;
}

export default function ExperienceButton(props: ExperienceButtonProps) {
  const { name, active, onClick, experience } = props;

  return (
    <button
      onClick={() => onClick(experience)}
      className={`${active ? styles.timelineBtnActive : ""}`}
      aria-label={`Click to see my experience with ${name}`}
    >
      {name}
    </button>
  );
}
