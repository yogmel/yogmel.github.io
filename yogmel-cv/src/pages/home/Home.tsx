import ProfilePic from "@/assets/img/profile-pic.jpeg";
import Image from "next/image";

function Home() {
  return (
    <>
      <header className="header">
        <div className="header__box">
          <p>Hi, I'm</p>
          <h2>Mellina Yonashiro</h2>
          <p>Software Engineer</p>
        </div>
        <div className="header__gradient"></div>
      </header>

      <main>
        <section className="about container">
          <h2>
            01. <span className="highlighted-text">Who am I?</span>
          </h2>
          <div className="about__desc">
            <div className="about__img img-box">
              <Image
                width={200}
                height={200}
                src={ProfilePic}
                className="img-responsive"
                alt="A photo of me, smiling, in front of a wooden-colored background"
              />
              <div className="img-box__border"></div>
            </div>
            <div className="about__text">
              <p>
                <span className="highlighted-text">Nice to meet you!</span> I'm
                a software engineer, designer, and educator, passionate about
                social, cultural, and collaborative experiences. I'm specialized
                in frontend technologies, migrating on full-stack. I'm also
                interested in Open Source, machine learning, and internet of
                things.
              </p>
              <p>
                I'm currently looking for an opportunity as a software engineer.
              </p>
              <div className="about__links">
                <a
                  href="mailto:yonashiro.mellina@gmail.com"
                  title="Send me an email"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="far fa-envelope fa-3x"></i>
                </a>
                <a
                  href="https://github.com/yogmel"
                  title="Check my Github account"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github fa-3x"></i>
                </a>
                <a
                  href="https://www.hackerrank.com/yogmel"
                  title="Check my Hackerrank account"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-hackerrank fa-3x"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/yogmel/"
                  title="Check my LinkedIn profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin fa-3x"></i>
                </a>
                <a
                  href="https://dev.to/yogmel"
                  title="Go to my dev.to page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-dev fa-3x"></i>
                </a>
                <a
                  href="https://medium.com/@yogmel"
                  title="Read my articles at Medium"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-medium fa-3x"></i>
                </a>
              </div>
              <div className="about__skills">
                <h3>Highlights</h3>
                <ul className="about__skill-list">
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

        <section className="experience container">
          <h2>
            02. <span className="highlighted-text">Work Experience</span>
          </h2>

          <div className="experience__timeline">
            <button
              className="experience__timeline-btn"
              data-controls="experienceOne"
              aria-label="Click to see my experience with YouSea"
            >
              YouSea
            </button>
            <div className="divider"></div>
            <button
              className="experience__timeline-btn"
              data-controls="experienceTwo"
              aria-label="Click to see my experience with Reprograma"
            >
              Reprograma
            </button>
            <div className="divider"></div>
            <button
              className="experience__timeline-btn"
              data-controls="experienceThree"
              aria-label="Click to see my experience with Mozilla"
            >
              Mozilla
            </button>
            <div className="divider"></div>
            <button
              className="experience__timeline-btn"
              data-controls="experienceFour"
              aria-label="Click to see my experience with Daitan"
            >
              Daitan
            </button>
            <div className="divider"></div>
            <button
              className="experience__timeline-btn active"
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

          <div className="experience__desc active" id="experienceFive">
            <img src="./img/justwatch-logo.jpg" alt="JustWatch logo" />
            <div className="experience__text">
              <div className="experience__meta">
                <h3>JustWatch | Frontend Engineer</h3>
                <p>Remote and Berlin, Germany | Oct 2021 – Present</p>
              </div>
              <div className="experience__details">
                <p>
                  JustWatch is a streaming guide and a marketing solution to
                  distributors, streaming platforms and home entertainment. As a
                  frontend engineer, I
                  <span className="highlighted-text">
                    make decisions on our internal products architecture,
                    develop and plan new features
                  </span>
                  . We currently have a modern platform which is built in Vue
                  and a legacy one, which is in AngularJS.
                </p>
                <ul>
                  <li>
                    <span className="highlighted-text">
                      Discuss features, implementation and take part in planning
                      sessions
                    </span>
                    with interested stakeholders (designers, product managers,
                    users and backend engineers).
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
                    <span className="highlighted-text">
                      proposing UX solutions
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="experience__desc" id="experienceFour">
            <img src="./img/daitan-logo.jpg" alt="Daitan logo" />
            <div className="experience__text">
              <div className="experience__meta">
                <h3>Daitan | Software Engineer</h3>
                <p>Remote | Jul 2020 – Present</p>
              </div>
              <div className="experience__details">
                <p>
                  I'm currently working directly with our client, a European
                  telecommunication company. In the frontend, we develop with
                  React and Typescript, using MVVM architecture with MobX and
                  testing with Jest and React Testing Library. Our codebase is
                  also a hybrid of legacy and modern architecture in the same
                  place, bringing in extra sauce to the challenge. My role there
                  is to
                  <span className="highlighted-text">
                    develop new features, make architectural decisions and keep
                    the code maintainable.
                  </span>
                </p>
                <ul>
                  <li>
                    Act as a
                    <span className="highlighted-text">
                      facilitator between designers, frontend and backend
                      developers
                    </span>
                    , planning and understanding API gaps against frontend
                    needs.
                  </li>
                  <li>
                    I am also a
                    <span className="highlighted-text">
                      member of the Diversity Committee
                    </span>
                    , proposing, managing and creating awareness activities,
                    such as lectures, capacitation programs and learning
                    sessions.
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

          <div className="experience__desc" id="experienceThree">
            <img src="./img/mozilla-logo.png" alt="Mozilla logo" />
            <div className="experience__text">
              <div className="experience__meta">
                <h3>Mozilla | Software Engineer Internship (Outreachy)</h3>
                <p>Remote | Dec 2019 – Mar 2020</p>
              </div>
              <div className="experience__details">
                <p>
                  Some of Mozilla's employers who have some kind of disability
                  were struggling to use Treeherder continuous integration apps.
                  My role in this scenario was to
                  <span className="highlighted-text">
                    improve accessibility
                  </span>{" "}
                  - make sure bugs were fixed and user experience was enhanced.
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
                    <span className="highlighted-text">documentation</span>, so
                    all new code followed the best accessibility practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="experience__desc" id="experienceTwo">
            <img src="./img/reprograma-logo.png" alt="Reprograma logo" />
            <div className="experience__text">
              <div className="experience__meta">
                <h3>Reprograma | Front-end Development Teacher</h3>
                <p>São Paulo - Brazil | Feb 2018 – present</p>
              </div>
              <div className="experience__details">
                <p>
                  Reprograma is an NGO whose mission is to empower women,
                  providing an intensive front end course. As an educator, my
                  focus is to
                  <span className="highlighted-text">
                    teach and tutor, sharing front end technologies content
                    (HTML, CSS, Javascript and React)
                  </span>
                  , as well as manage a diverse group of students.
                </p>
                <ul>
                  <li>
                    <span className="highlighted-text">
                      Keep myself updated
                    </span>{" "}
                    on the latest technologies
                  </li>
                  <li>
                    <span className="highlighted-text">
                      Manage and supervise
                    </span>
                    projects developed by students.
                  </li>
                  <li>
                    <span className="highlighted-text">Collaborate</span> with
                    team members and discuss className content.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="experience__desc" id="experienceOne">
            <img src="./img/yousea-logo.png" alt="YouSea logo" />
            <div className="experience__text">
              <div className="experience__meta">
                <h3>YouSea | Web and Software Developer</h3>
                <p>Mar 2016 – present</p>
              </div>
              <div className="experience__details">
                <p>
                  YouSea is the company I founded to house independent projects
                  with clients. My goal is to make sure all processes are clear
                  - timeline, challenges, as well as provide high-quality
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
                    <span className="highlighted-text">
                      Develop and implement
                    </span>
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

        <section className="skills container">
          <h2>
            03. <span className="highlighted-text">Skills</span>
          </h2>

          <div className="skill__columns">
            <div>
              <h3>Front-end</h3>
              <ul>
                <li>HTML5</li>
                <li>
                  CSS3 <i>(Sass/SCSS)</i>
                </li>
                <li>Bootstrap</li>
                <li>
                  Javascript <i>(ES6+)</i>
                </li>
                <li>Typescript</li>
                <li>React</li>
                <ul>
                  <li>Jest</li>
                  <li>React Testing Library</li>
                  <li>Redux</li>
                  <li>styled components</li>
                </ul>
                <li>MobX</li>
                <li>Angular, Vue</li>
              </ul>
            </div>
            <div>
              <h3>Others</h3>
              <ul>
                <li>
                  React Native <i>(mobile development)</i>
                </li>
                <li>
                  Wordpress <i>(CMS and web development)</i>
                </li>
                <li>
                  Gatsby <i>(blog)</i>
                </li>
                <li>
                  User Experience <i>(UX)</i>
                </li>
                <li>
                  MVVM <i>(architecture)</i>
                </li>
                <li>
                  Object oriented programming <i>(paradigm)</i>
                </li>
                <li>
                  Clean Code and SOLID <i>(best practices)</i>
                </li>
              </ul>
            </div>
            <div>
              <h3>Back-end / Database</h3>
              <ul>
                <li>Node.js</li>
                <ul>
                  <li>Express</li>
                </ul>
                <li>MongoDB</li>
              </ul>
              <li>Firebase</li>
            </div>
            <div>
              <h3>Tools</h3>
              <ul>
                <li>
                  Git / Mercurial <i>(version control)</i>
                </li>
                <li>Github, GitLab</li>
                <li>VS Code / Sublime</li>
                <li>
                  Agile methods <i>(SCRUM and Kanban)</i>
                </li>
                <li>ESLint</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="learning container">
          <div className="education">
            <h2>
              04.1 <span className="highlighted-text">Education</span>
            </h2>
            <div className="education__meta">
              <h3>Universidade Federal de Minas Gerais (UFMG)</h3>
              <p>Extension course - Software Engineer</p>
              <p>Remote | 2021</p>
            </div>
            <div className="education__meta">
              <h3>Universidade Estadual Paulista (UNESP)</h3>
              <p>Design Bachelor</p>
              <p>Bauru, SP - Brazil | 2011 - 2015</p>
            </div>
            <div className="education__meta">
              <h3>Parsons The New School for Design</h3>
              <p>Design and Technology Major Visiting Student</p>
              <p>New York, NY | Jan - Dec 2013</p>
            </div>
          </div>

          <div className="courses">
            <h2>
              04.2 <span className="highlighted-text">Courses</span>
            </h2>
            <ul>
              <li>
                Advanced Javascript - <span className="t-lighter">Udemy</span>
              </li>
              <li>
                Node.js developer course -{" "}
                <span className="t-lighter">Udemy</span>
              </li>
              <li>
                React Native The Practical Guide -
                <span className="t-lighter">Udemy</span>
              </li>
              <li>
                Advanced CSS and Sass - <span className="t-lighter">Udemy</span>
              </li>
              <li>
                React Developer Course -{" "}
                <span className="t-lighter">Udemy</span>
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

        <section className="projects container">
          <h2>
            05. <span className="highlighted-text">Projects</span>
          </h2>
          <div className="projects__box">
            <div className="projects__card">
              <div className="img-box">
                <img
                  src="./img/days-countdown.png"
                  alt="Screenshot of Indecision App. A big purple button appears at the top, reading 'What should I do?'. Down below, you can see the options 'Learn Python' and 'Learn Typescript'."
                  className="img-responsive"
                />
              </div>
              <div className="projects__card-desc">
                <h3>Days Countdown App</h3>
                <p>
                  Sometimes you just need to know how far that special date is.
                  This web app takes a description and a date, via Airbnb Date
                  Picker, and shows you how many days it will take to reach it.
                  You can store the link for later or share with people, as its
                  parameters will be in the URL. Currently in Portuguese only.
                </p>
                <a
                  href="https://github.com/yogmel/react-countdown"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt fa-2x"></i>
                </a>
                <div className="projects__card-tech">
                  ReactJs | styled components | MVVM
                </div>
              </div>
            </div>

            <div className="projects__card">
              <div className="img-box">
                <img
                  src="./img/indecision-app.png"
                  alt="Screenshot of Indecision App. A big purple button appears at the top, reading 'What should I do?'. Down below, you can see the options 'Learn Python' and 'Learn Typescript'."
                  className="img-responsive"
                />
              </div>
              <div className="projects__card-desc">
                <h3>Indecision App</h3>
                <p>
                  Not sure what to do next? Add your options into Indecision App
                  and let the computer choose it for you! Built on a bare React
                  project, setup with Webpack and Sass loader.
                </p>
                <a
                  href="https://github.com/yogmel/react-course-projects"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt fa-2x"></i>
                </a>
                <div className="projects__card-tech">
                  ReactJs | Sass | Webpack
                </div>
              </div>
            </div>

            <div className="projects__card">
              <div className="img-box">
                <img
                  src="./img/rn-boilerplate.png"
                  alt="Two screenshots of the app. The first is the Sign up screen, with several inputs. The second is the Input Data screen, where the user can add images and videos."
                  className="img-responsive"
                />
              </div>
              <div className="projects__card-desc">
                <h3>React Native Boilerplate</h3>
                <p>
                  It is a template to a React Native app, which consists of a
                  Login, Signup, Home and Input Data screens. Integration with
                  Firebase is also available and ready-to-use.
                </p>
                <a
                  href="https://github.com/yogmel/react-native-app-boilerplate"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt fa-2x"></i>
                </a>
                <div className="projects__card-tech">
                  React Native | Firebase | Android Studio
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__disclaimer">
          <h4>About this site</h4>
          <div>
            <p>Built with HTML, CSS and vanilla Javascript.</p>
            <p>
              If you find a bug, please register an
              <a
                href="https://github.com/yogmel/yogmel.github.io/issues"
                target="_blank"
                rel="noreferrer"
              >
                issue
              </a>
              . Thanks!
            </p>
            <p>
              This website <strong>does not</strong> collect any personal data.
            </p>
          </div>
        </div>
        <p className="footer__cc">
          Made with love by Mellina Yonashiro 2021 @
          <a
            href="https://github.com/yogmel/yogmel.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </footer>
    </>
  );
}

export default Home;
