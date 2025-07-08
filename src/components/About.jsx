import React from 'react';
import headshot from './images/headshot.jpg';
import style from '../style/About.module.css';

function About() {
  return (
    <div className={style.aboutDiv}>
      {/* <div className={style.aboutBlock}> */}
        <div className={style.headerDiv}>
          <h2 id="about" className={style.aboutHeader}>
            About Me
          </h2>
          <div className={style.line} />
        </div>
        <div className={style.backgroundBox} />
        <div className={style.imgAndText}>
          <div>
            {/* <div className={style.headshotBox} /> */}
          </div>
          <div className={style.textBlock}>
            <img src={headshot} alt="Eric Sorum" className={style.headshot} align="left"/>

            <p>
            My life has been defined by self-starting and curiosity. It is no wonder that teaching myself to code and working as a developer has been one of the most fulfilling parts of my life.
            </p>
            <p>
            I have been crazy about computers ever since I first played around on the DOS 
            prompt of my dad’s i386.  I went to computer camp in middle school to learn 
            C++ and dreamt of being a real programmer.  The past 17 years have seen me 
            pursue many other passions, representing a diverse set of experiences requiring 
            excellent communication and creativity:
            </p>
            <ul>
              <li>Held leadership positions at nonprofits and businesses for 12+ years.</li>
              <li>Hired, trained, and managed teams of 30+ staff members.</li>
              <li>Personally planned and led 50+ performance events.</li>
              <li>Performed with world-class organizations such as the Minnesota Opera 
                and Bach Society of Minnesota for 10+ years.</li>
              <li>Led volunteers in local activism and research, meeting with city and 
                state policymakers to promote affordable housing.</li>
            </ul>
            <p>
            Computers have once again emerged as my true passion, and returning to code 
            has felt like coming home.
            </p>
            As a freelance Full Stack Developer, I am available for tasks large and small, whether it's styling your WordPress site or contributing to enterprise software.  My demonstrated drive to quickly pick up new technologies and thrive in a fast-paced environment make me a valuable addition to any project.  With over two years of experience as a developer, I built scores of web pages on the frontend while untangling the toughest backend bugs.  In all, I resolved over 1,000 Jira tickets, including large projects and urgent issues amid frequently changing priorities.
            <p>
            <p>I love the fact that I learn something new every day as a developer.  I pride myself on strong web fundamentals in HTML, CSS, and JavaScript, while exploring the latest technologies such as Next.js, Cursor AI, and Rust.</p>
            <p>Outside of software, I enjoy performing in local theaters and singing J.S. Bach.  Oh, and if you get crushed by someone on the StarCraft 2 ladder, that may have been me.</p>
            </p>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default About;
