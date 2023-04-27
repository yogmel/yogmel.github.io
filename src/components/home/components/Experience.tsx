import ExperienceToggler from "@/shared/components/ExperienceToggler";
import { experienceData } from '@/data';

export default function Experience() {
  return (
    <section className="container">
      <h2>
        02. <span className="highlighted-text">Work Experience</span>
      </h2>

      <ExperienceToggler data={experienceData} />
    </section>
  );
}
