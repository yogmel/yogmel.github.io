import styles from "@/styles/Projects.module.css";
import CountdownImage from "@/assets/img/days-countdown.png";
import IndecisionAppImage from "@/assets/img/indecision-app.png";
import RNBoilerplateImage from "@/assets/img/rn-boilerplate.png";
import ProjectList from "@/components/ProjectsList";

const projectData = [
  {
    image: {
      src: CountdownImage,
      alt: "Screenshot of Indecision App. A big purple button appears at the top, reading 'What should I do?'. Down below, you can see the options 'Learn Python' and 'Learn Typescript'.",
    },
    title: "Days Countdown App",
    description:
      "Sometimes you just need to know how far that special date is. This web app takes a description and a date, via Airbnb Date Picker, and shows you how many days it will take to reach it. You can store the link for later or share with people, as its parameters will be in the URL. Currently in Portuguese only.",
    link: "https://github.com/yogmel/react-countdown",
    keywords: "ReactJs | styled components | MVVM",
  },
  {
    image: {
      src: IndecisionAppImage,
      alt: "Screenshot of Indecision App. A big purple button appears at the top, reading 'What should I do?'. Down below, you can see the options 'Learn Python' and 'Learn Typescript'.",
    },
    title: "Indecision App",
    description:
      "Not sure what to do next? Add your options into Indecision App and let the computer choose it for you! Built on a bare React project, setup with Webpack and Sass loader.",
    link: "https://github.com/yogmel/react-course-projects",
    keywords: "ReactJs | Sass | Webpack",
  },
  {
    image: {
      src: RNBoilerplateImage,
      alt: "Two screenshots of the app. The first is the Sign up screen, with several inputs. The second is the Input Data screen, where the user can add images and videos.",
    },
    title: "React Native Boilerplate",
    description:
      "It is a template to a React Native app, which consists of a Login, Signup, Home and Input Data screens. Integration with Firebase is also available and ready-to-use.",
    link: "https://github.com/yogmel/react-native-app-boilerplate",
    keywords: "React Native | Firebase | Android Studio",
  },
];

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
