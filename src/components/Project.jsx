import style from '../style/Project.module.css'
import githubLogo from './images/github.svg';
import linkArrow from './images/site.svg'

export default function Project(project) {
  const { name, img, github, link, description } = project;
  const altText = `Link to ${name} project`;
  return (    
    <div className={style.card}>
      <a href={github}>
        <img src={img} alt={altText} className={style.projectImg} />
      </a>
      <div>
        <div className={style.projectHeader}>
          <a href={github}>
            <div className={style.projectTitle}>Tea Shop</div>
          </a>
          <div className={style.linkGroup}>
            <a href={link} className={style.linkSet}>
              Go to site
              {' '}
              <img src={linkArrow} alt="Link arrow" className={style.linkIcon} />
            </a>
            <a href={link} className={style.linkSet}>
              GitHub repo
              {' '}
              <img src={githubLogo} alt="Github icon" className={style.linkIcon} />
            </a>
          </div>
        </div>
        <div className={style.textBlock}>
          <p className={style.description}>
            {description}</p>
        </div>
      </div>
    </div>
  )
}