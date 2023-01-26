import styles from "@/styles/Skills.module.css";

const data = [
  {
    title: "Front-end",
    data: [
      "HTML",
      ["CSS3", "Sass/SCSS"],
      "Bootstrap",
      ["Javascript", "ES6+"],
      "Typescript",
      {
        mainItem: "React",
        subItems: [
          "Jest",
          "React Testing Library",
          "Redux",
          "styled componets",
        ],
      },
      "MobX",
      "Angular, Vue",
    ],
  },
  {
    title: "Others",
    data: [
      ["React Native", "mobile development"],
      ["Wordpress", "CMS and web development"],
      ["Gatsby", "blog"],
      ["User Experience", "UX"],
      ["MVVM", "architecture"],
      ["Object oriented programming"],
      ["Clean Code and SOLID", "best practices"],
    ],
  },
];

export default function Skills() {
  return (
    <section className="container">
      <h2>
        03. <span className="highlighted-text">Skills</span>
      </h2>

      <div className={styles.columns}>
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
  );
}
