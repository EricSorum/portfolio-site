import style from '../style/Project.module.css'
import githubLogo from './images/github.svg';
import linkArrow from './images/site.svg'

export default function Project(props) {
  const { name, img, github, link, description } = props;
  const altText = `Link to ${name} project`;
  return (    
    <div className={style.card}>
      <a href={link} target="_blank">
        <img src={img} alt={altText} className={style.projectImg} />
      </a>
      <div>
        <div className={style.projectHeader}>
          <a href={link} target="_blank">
            <div className={style.projectTitle}>{name}</div>
          </a>
          <div className={style.linkGroup}>
            <a href={link} className={style.linkSet} target="_blank">
              Go to site
              {' '}
              <img src={linkArrow} alt="Link arrow" className={style.linkIcon} />
            </a>
            <a href={github} className={style.linkSet} target="_blank">
              GitHub repo
              {' '}
              <img src={githubLogo} alt="Github icon" className={style.linkIcon} />
            </a>
          </div>
        </div>
        <div className={style.textBlock}>
            {description.split('\n').map((line, index) => (
                <p className={style.description} key={index}>
                {line}
                </p>
            ))}          
        </div>
      </div>
    </div>
  )
}