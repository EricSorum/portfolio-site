import React from 'react';
import style from '../style/Portfolio.module.css';
import Project from './Project';
import { projects } from '../data/projects';

import kegcuratorImg from './images/kegcurator.png';
import korpruluImg from './images/korprulu.png';
import recipeavalancheImg from './images/recipeavalanche.png';
import spaceronanImg from './images/spaceronan.png';
import videographerImg from './images/videographer.png';
import andorhelper from './images/andorhelper.png';

function Portfolio() {

  const imageMap = {
    "Keg Curator": kegcuratorImg,
    "Korprulu Finance": korpruluImg,
    "Recipe Avalanche": recipeavalancheImg,
    "Space Ronan": spaceronanImg,
    "Videographer's Profile": videographerImg,
    "Andor Helper": andorhelper,
  }

  return (
    <div className={style.portfolioDiv}>
        <div className={style.headerDiv}>
          <h2 id="portfolio" className={style.portfolioHeader}>
            Portfolio
          </h2>
          <div className={style.line} />
        </div>
        <div className={style.projectList}>
          {projects.map((project) => (
            <Project  key={`key-${project.name}`} {...project} img={imageMap[project.name]}/>
          )
          )}
        </div>
   </div>
  );
}

export default Portfolio;
