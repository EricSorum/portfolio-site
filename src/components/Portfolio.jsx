import React from 'react';
import style from '../style/Portfolio.module.css';
// import veggies from './images/veggies.jpg';
// import beer from './images/beer.jpg';
// import architecture from './images/architecture.jpg';
// import max from './images/max.jpg';
// import gallery from './images/gallery.jpg';
// import pantry from './images/pantry.jpg';
// import tea from './images/tea.jpg';
import Project from './Project';
import { projects } from '../data/projects';

import kegcuratorImg from './images/kegcurator.png';
import korpruluImg from './images/korprulu.png';
import recipeavalancheImg from './images/recipeavalanche.png';
import spaceronanImg from './images/spaceronan.png';
import videographerImg from './images/videographer.png';

function Portfolio() {

  const imageMap = {
    "Keg Curator": kegcuratorImg,
    "Korprulu Finance": korpruluImg,
    "Recipe Avalanche": recipeavalancheImg,
    "Space Ronan": spaceronanImg,
    "Videographer's Profile Site": videographerImg
  }

  return (
    <div className={style.portfolioDiv}>
      {/* <div className={style.portfolioBlock}> */}
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
      {/* </div> */}
    </div>
  );
}

export default Portfolio;
