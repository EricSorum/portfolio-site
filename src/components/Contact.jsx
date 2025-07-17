import React from 'react';
import style from '../style/Contact.module.css';

function Contact() {
  return (
    <div className={style.contactDiv}>
      <div className={style.headerDiv}>
        <h2 id="contact" className={style.contactHeader}>
          Contact
        </h2>
        <div className={style.line} />
      </div>
      <br />
      <div className={style.addressBlock}>
        <p className={style.contactText}>
          Please reach out by email or learn more about me on my LinkedIn or GitHub profiles:
        </p>
        <br />
        <div className={style.contactButtonDiv}>
          <a href="mailto:ejsorum@gmail.com">
            <button className={style.contactButton}>Email: ejsorum@gmail.com</button>
          </a>
          <a href="https://www.linkedin.com/in/eric-sorum-894b55183/" target="_blank">
            <button className={style.contactButton}>Find me on LinkedIn</button>
          </a>
          <a href="https://github.com/EricSorum" target="_blank">
            <button className={style.contactButton}>View my GitHub profile</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
