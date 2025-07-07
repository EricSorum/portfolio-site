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
          <li><span className={style.skillCategory}>Languages:</span> JavaScript/TypeScript, PHP, SQL, HTML, CSS</li>
          <li><span className={style.skillCategory}>Frameworks:</span> React.js, Next.js, Symfony</li>
          <li><span className={style.skillCategory}>Style libraries:</span> Bootstrap, Tailwind, Material UI </li>          
          <li><span className={style.skillCategory}>Content Management Systems (CMS):</span> Drupal 8-10, WordPress</li>
          <li><span className={style.skillCategory}>Dev Tools:</span> Git, GitHub, Vite, Webpack, npm/pnpm, Valet, Homebrew, Composer, Jira</li>
          <li><span className={style.skillCategory}>Practices:</span> CI/CD, Agile development, Accessibility (WCAG 2.2)</li>
          <li><span className={style.skillCategory}>Other:</span> Cursor AI Agent, LLM-assisted development, Google Tag Manager, Google Analytics 4</li>
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
