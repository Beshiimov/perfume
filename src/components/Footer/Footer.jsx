import React from 'react'
import { Link } from 'react-router-dom'
import s from './Footer.module.scss'

const Footer = () => (
  <footer>
    <div className={s.footerRow}>
      <div className={s.row}>
        <Link to="/home" className="logo">
          <p>
            Zamir'<span>s</span>
          </p>
          <p>Perfumery</p>
        </Link>
      </div>
      <div className={s.row}>
        Все права защищены <p>©2022</p>
        <a
          href="mailto:beshiimov@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Связь с нами
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
