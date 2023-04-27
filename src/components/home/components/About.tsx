import Image from "next/image";
import ProfilePic from "@/assets/img/profile-pic.jpeg";
import styles from "@/styles/About.module.css";
import SocialMediaButton from "@/shared/components/SocialMediaButton";
import { socialMediaData } from "@/data";

export default function About() {
  return (
    <section className="container">
      <h2>
        01. <span className="highlighted-text">Who am I?</span>
      </h2>
      <div className={styles.description}>
        <div className={`${styles.img} img-box`}>
          <Image
            width={200}
            height={200}
            src={ProfilePic}
            className="img-responsive"
            alt="A photo of me, smiling, in front of a wooden-colored background"
          />
          <div className="img-box__border"></div>
        </div>
        <div className={styles.text}>
          <p>
            <span className="highlighted-text">Nice to meet you!</span> I'm a
            software engineer, designer, and educator, passionate about social,
            cultural, and collaborative experiences. I'm specialized in frontend
            technologies, migrating on full-stack. I'm also interested in Open
            Source, machine learning, and internet of things.
          </p>
          <p>
            I'm currently looking for an opportunity as a software engineer.
          </p>
          <div className={styles.links}>
            {socialMediaData.map(data => (
              <SocialMediaButton
                key={data.title}
                href={data.href}
                title={data.title}
                icon={data.icon}
              />
            ))}
          </div>
          <div className={styles.skills}>
            <h3>Highlights</h3>
            <ul className={styles.skillList}>
              <li>Javascript (ES6+)</li>
              <li className="divider"></li>
              <li>React + Typescript</li>
              <li className="divider"></li>
              <li>MVVM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
