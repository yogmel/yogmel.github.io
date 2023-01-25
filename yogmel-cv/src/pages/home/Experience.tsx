import styles from "@/styles/Experience.module.css";
import Image from "next/image";
import JustWatchLogo from "@/assets/img/justwatch-logo.jpg";
import DaitanLogo from "@/assets/img/daitan-logo.jpg";
import MozillaLogo from "@/assets/img/mozilla-logo.png";
import ReprogramaLogo from "@/assets/img/reprograma-logo.png";
import YouSeaLogo from "@/assets/img/yousea-logo.png";

export default function Experience() {
  return (
    <section className="container">
      <h2>
        02. <span className="highlighted-text">Work Experience</span>
      </h2>

      <div className={styles.timeline}>
        <button
          data-controls="experienceOne"
          aria-label="Click to see my experience with YouSea"
        >
          YouSea
        </button>
        <div className="divider"></div>
        <button
          data-controls="experienceTwo"
          aria-label="Click to see my experience with Reprograma"
        >
          Reprograma
        </button>
        <div className="divider"></div>
        <button
          data-controls="experienceThree"
          aria-label="Click to see my experience with Mozilla"
        >
          Mozilla
        </button>
        <div className="divider"></div>
        <button
          data-controls="experienceFour"
          aria-label="Click to see my experience with Daitan"
        >
          Daitan
        </button>
        <div className="divider"></div>
        <button
          data-controls="experienceFive"
          aria-label="Click to see my experience with JustWatch"
        >
          JustWatch
        </button>
        <div
          className="experience__timeline-pointer"
          id="experiencePointer"
        ></div>
      </div>

      <div className={`${styles.description} active`} id="experienceFive">
        <Image
          src={JustWatchLogo}
          width={200}
          height={200}
          alt="JustWatch logo"
        />
        <div className={styles.text}>
          <div className={styles.meta}>
            <h3>JustWatch | Frontend Engineer</h3>
            <p>Remote and Berlin, Germany | Oct 2021 – Present</p>
          </div>
          <div className={styles.details}>
            <p>
              JustWatch is a streaming guide and a marketing solution to
              distributors, streaming platforms and home entertainment. As a
              frontend engineer, I
              <span className="highlighted-text">
                make decisions on our internal products architecture, develop
                and plan new features
              </span>
              . We currently have a modern platform which is built in Vue and a
              legacy one, which is in AngularJS.
            </p>
            <ul>
              <li>
                <span className="highlighted-text">
                  Discuss features, implementation and take part in planning
                  sessions
                </span>
                with interested stakeholders (designers, product managers, users
                and backend engineers).
              </li>
              <li>
                Develop software with
                <span className="highlighted-text">
                  Vue with Typescript
                </span>{" "}
                and AngularJS.
              </li>
              <li>
                Build a platform which enables our users to make smarter
                decisions and optimize their work. This involves constant
                talking with them and
                <span className="highlighted-text">proposing UX solutions</span>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.description} id="experienceFour">
        <Image src={DaitanLogo} width={200} height={200} alt="Daitan logo" />
        <div className={styles.text}>
          <div className={styles.meta}>
            <h3>Daitan | Software Engineer</h3>
            <p>Remote | Jul 2020 – Present</p>
          </div>
          <div className={styles.details}>
            <p>
              I'm currently working directly with our client, a European
              telecommunication company. In the frontend, we develop with React
              and Typescript, using MVVM architecture with MobX and testing with
              Jest and React Testing Library. Our codebase is also a hybrid of
              legacy and modern architecture in the same place, bringing in
              extra sauce to the challenge. My role there is to
              <span className="highlighted-text">
                develop new features, make architectural decisions and keep the
                code maintainable.
              </span>
            </p>
            <ul>
              <li>
                Act as a
                <span className="highlighted-text">
                  facilitator between designers, frontend and backend developers
                </span>
                , planning and understanding API gaps against frontend needs.
              </li>
              <li>
                I am also a
                <span className="highlighted-text">
                  member of the Diversity Committee
                </span>
                , proposing, managing and creating awareness activities, such as
                lectures, capacitation programs and learning sessions.
              </li>
              <li>
                Also play a
                <span className="highlighted-text">
                  technical interviewer role
                </span>
                , helping the hiring process.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.description} id="experienceThree">
        <Image src={MozillaLogo} width={200} height={200} alt="Mozilla logo" />
        <div className={styles.text}>
          <div className={styles.meta}>
            <h3>Mozilla | Software Engineer Internship (Outreachy)</h3>
            <p>Remote | Dec 2019 – Mar 2020</p>
          </div>
          <div className={styles.details}>
            <p>
              Some of Mozilla's employers who have some kind of disability were
              struggling to use Treeherder continuous integration apps. My role
              in this scenario was to
              <span className="highlighted-text">improve accessibility</span> -
              make sure bugs were fixed and user experience was enhanced.
            </p>
            <ul>
              <li>
                Stay in contact with the users, attend meetings to
                <span className="highlighted-text">
                  discuss implementation strategies
                </span>
                .
              </li>
              <li>
                Develop
                <span className="highlighted-text">
                  new components in React
                </span>
                and others were improved and optimized.
              </li>
              <li>
                Update its
                <span className="highlighted-text">documentation</span>, so all
                new code followed the best accessibility practices.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.description} id="experienceTwo">
        <Image
          src={ReprogramaLogo}
          width={200}
          height={200}
          alt="Reprograma logo"
        />
        <div className={styles.text}>
          <div className={styles.meta}>
            <h3>Reprograma | Front-end Development Teacher</h3>
            <p>São Paulo - Brazil | Feb 2018 – present</p>
          </div>
          <div className={styles.details}>
            <p>
              Reprograma is an NGO whose mission is to empower women, providing
              an intensive front end course. As an educator, my focus is to
              <span className="highlighted-text">
                teach and tutor, sharing front end technologies content (HTML,
                CSS, Javascript and React)
              </span>
              , as well as manage a diverse group of students.
            </p>
            <ul>
              <li>
                <span className="highlighted-text">Keep myself updated</span> on
                the latest technologies
              </li>
              <li>
                <span className="highlighted-text">Manage and supervise</span>
                projects developed by students.
              </li>
              <li>
                <span className="highlighted-text">Collaborate</span> with team
                members and discuss className content.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.description} id="experienceOne">
        <Image src={YouSeaLogo} width={200} height={200} alt="YouSea logo" />
        <div className={styles.text}>
          <div className={styles.meta}>
            <h3>YouSea | Web and Software Developer</h3>
            <p>Mar 2016 – present</p>
          </div>
          <div className={styles.details}>
            <p>
              YouSea is the company I founded to house independent projects with
              clients. My goal is to make sure all processes are clear -
              timeline, challenges, as well as provide high-quality
              deliverables. That means I am responsible for
              <span className="highlighted-text">
                prototyping, developing and deploying websites and apps
              </span>
              .
            </p>
            <ul>
              <li>
                <span className="highlighted-text">
                  Design projects and solutions
                </span>
                according to each client's need.
              </li>
              <li>
                <span className="highlighted-text">Develop and implement</span>
                web apps, websites, and blogs in cloud servers.
              </li>
              <li>
                <span className="highlighted-text">
                  Coordinate multiple projects
                </span>
                and deadlines simultaneously.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
