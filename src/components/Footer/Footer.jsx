import React from 'react'
import { Link } from 'react-router-dom'
import s from './Footer.module.scss'

const Footer = () => (
  <footer>
    <div className={s.footerRow}>
      <div className={s.row}>
        <Link className="logo">Parfums</Link>
        <a
          href="mailto:beshiimov@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Моя Почта
        </a>
      </div>
      <div className={s.row}>
        Все права защищены <p>©2022</p>
      </div>
    </div>
  </footer>
)

export default Footer
