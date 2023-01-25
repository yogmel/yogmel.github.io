import styles from "@/styles/Projects.module.css";
import Image from "next/image";
import CountdownImage from "@/assets/img/days-countdown.png";
import IndecisionAppImage from "@/assets/img/indecision-app.png";
import RNBoilerplateImage from "@/assets/img/rn-boilerplate.png";

export default function Projects() {
  return (
    <section className={`${styles.projects} container`}>
      <h2>
        05. <span className="highlighted-text">Projects</span>
      </h2>
      <div className={styles.box}>
        <div className={styles.card}>
          <div className="img-box">
            <Image
              width={300}
              src={CountdownImage}
              alt="Screenshot of Indecision App. A big purple button appears at the top, reading 'What should I do?'. Down below, you can see the options 'Learn Python' and 'Learn Typescript'."
              className="img-responsive"
            />
          </div>
          <div className={styles.cardDescription}>
            <h3>Days Countdown App</h3>
            <p>
              Sometimes you just need to know how far that special date is. This
              web app takes a description and a date, via Airbnb Date Picker,
              and shows you how many days it will take to reach it. You can
              store the link for later or share with people, as its parameters
              will be in the URL. Currently in Portuguese only.
            </p>
            <a
              href="https://github.com/yogmel/react-countdown"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-external-link-alt fa-2x"></i>
            </a>
            <div className={styles.cardTech}>
              ReactJs | styled components | MVVM
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className="img-box">
            <Image
              width={300}
              src={IndecisionAppImage}
              alt="Screenshot of Indecision App. A big purple button appears at the top, reading 'What should I do?'. Down below, you can see the options 'Learn Python' and 'Learn Typescript'."
              className="img-responsive"
            />
          </div>
          <div className={styles.cardDescription}>
            <h3>Indecision App</h3>
            <p>
              Not sure what to do next? Add your options into Indecision App and
              let the computer choose it for you! Built on a bare React project,
              setup with Webpack and Sass loader.
            </p>
            <a
              href="https://github.com/yogmel/react-course-projects"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-external-link-alt fa-2x"></i>
            </a>
            <div className={styles.cardTech}>ReactJs | Sass | Webpack</div>
          </div>
        </div>

        <div className={styles.card}>
          <div className="img-box">
            <Image
              width={300}
              src={RNBoilerplateImage}
              alt="Two screenshots of the app. The first is the Sign up screen, with several inputs. The second is the Input Data screen, where the user can add images and videos."
              className="img-responsive"
            />
          </div>
          <div className={styles.cardDescription}>
            <h3>React Native Boilerplate</h3>
            <p>
              It is a template to a React Native app, which consists of a Login,
              Signup, Home and Input Data screens. Integration with Firebase is
              also available and ready-to-use.
            </p>
            <a
              href="https://github.com/yogmel/react-native-app-boilerplate"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-external-link-alt fa-2x"></i>
            </a>
            <div className={styles.cardTech}>
              React Native | Firebase | Android Studio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
