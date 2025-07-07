import React from 'react';
import style from '../style/Home.module.css';
import resume from './resume/EJSorumResume2025.pdf';

function Home() {
  return (
    <div className={style.homeDiv} id="home">
      <div className={style.homeBlock}>
        <div className={style.headerDive}>
          <h1 className={style.homeHeader}>Eric Sorum</h1>
        </div>
        <p className={style.subHeader}>
          Full Stack Web Developer with 2 years of experience.
        </p>
        <ul>
          <li>Languages: JavaScript/TypeScript, PHP, SQL, HTML, CSS</li>
          <li>Libraries & Tools: React.js, Tailwind CSS, Bootstrap, Drupal 8–10, Laravel, Node.js, Webpack</li>
          <li>Dev Tools: Git, GitHub, Valet, Homebrew, Composer, npm/pnpm, </li>
          <li>Practices: RESTful APIs, Agile development, Accessibility (WCAG 2.2), Cross-functional collaboration</li>
          <li>Other: Cursor AI Agent, LLM-assisted development, Google Tag Manager, Google Analytics 4</li>
        </ul>
        <div className={style.resumeButtons}>
          <a href={resume}>
            <div className={style.resumeButton}>View resume</div>
          </a>
          <a href={resume} download>
            <div className={style.resumeButton}>Download resume</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
