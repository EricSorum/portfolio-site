import React from 'react'
import style from '../style/Footer.module.css'
import github from './images/github.svg'

function Footer() {
  return (
    <div className={style.footerDiv}>
      <div>
        <a href="https://github.com/EricSorum" target="_blank">Designed and built by Eric Sorum</a>
      </div>
      <a href="https://github.com/EricSorum" target="_blank"><img src={github} alt="Github icon" className={style.linkIcon}/></a>
    </div>
  )
}

export default Footer