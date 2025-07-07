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
        <p>Proficient in:
          <span className={style.blueText}> JavaScript/TypeScript, PHP, HTML, CSS, React.js, </span>
          and other web technologies.
        </p>
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
